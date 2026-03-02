const Router = require("express").Router();
const crypto = require("crypto");

// In-memory session storage (use Redis or database in production)
const sessions = new Map();

// Generate secure random session ID
function generateSessionId() {
    return crypto.randomBytes(32).toString("hex");
}

// Login function
Router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate input
        if (!username || !password) {
            return res.status(400).json({ 
                error: "Username and password are required" 
            });
        }

        // TODO: Replace with actual database user lookup
        // For now, using a mock user for demonstration
        const mockUser = {
            id: 1,
            username: "test",
            password: "pass" // In production, use hashed passwords (bcrypt)
        };

        // Verify credentials
        if (username !== mockUser.username || password !== mockUser.password) {
            return res.status(401).json({ 
                error: "Invalid username or password" 
            });
        }

        // Generate session ID
        const sessionId = generateSessionId();
        
        // Store session data
        sessions.set(sessionId, {
            userId: mockUser.id,
            username: mockUser.username,
            createdAt: Date.now()
        });

        // Set session cookie
        res.cookie("sessionId", sessionId, {
            httpOnly: true,  // Prevents JavaScript access
            secure: false,   // Set to true in production with HTTPS
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
            sameSite: "lax"
        });

        // Send response
        res.json({ 
            message: "Login successful",
            user: {
                id: mockUser.id,
                username: mockUser.username
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = Router;