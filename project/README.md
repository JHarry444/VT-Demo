# QA Hotel - Complete Booking Website

A full-stack hotel booking website built with Express.js, jQuery, and Bootstrap.

## Features

- **User Authentication**
  - User registration and login system
  - JWT (JSON Web Token) based authentication
  - Password hashing with bcryptjs
  - Secure token storage in localStorage
  
- **Room Management**
  - Browse available rooms with different types and amenities
  - Search room availability by date range
  - View room details and pricing

- **Booking System**
  - Book rooms with selected dates
  - Add special requests to bookings
  - View booking history
  - Cancel existing bookings

- **Responsive Design**
  - Bootstrap 5 for mobile-friendly UI
  - Modern and clean interface
  - Interactive elements with jQuery

## Project Structure

```
project/
├── backend/
│   ├── server.js              # Main Express server
│   ├── database.js            # In-memory database and functions
│   ├── package.json          # Backend dependencies
│   └── routes/
│       ├── auth.js           # Authentication routes
│       └── bookings.js       # Booking and room routes
├── frontend/
│   ├── index.html            # Main HTML file
│   ├── app.js                # Main JavaScript application
│   └── styles.css            # Application styles
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

### 1. Check Node.js and npm
```bash
node --version
npm --version
```

### 2. Install Backend Dependencies

Navigate to the backend folder and install dependencies:

```bash
cd project/backend
npm install
```

This will install:
- express: Web framework
- jsonwebtoken: JWT token generation and verification
- bcryptjs: Password hashing
- cors: Cross-origin resource sharing
- body-parser: Request parsing
- uuid: Unique ID generation
- nodemon: (dev) Auto-restart server on changes

## Running the Application

### 1. Start the Backend Server

From the `project/backend` directory:

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The backend server will start on `http://localhost:5000`

### 2. Open Frontend in Browser

Once the backend is running, open your browser and navigate to:

```
http://localhost:5000
```

## Default Demo Account

Use these credentials to test the application:
- **Username:** demo
- **Password:** demo123

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login to account
- `POST /api/auth/logout` - Logout
- `GET /api/auth/user` - Get current user info
- `GET /api/auth/authenticated` - Check auth status

### Rooms
- `GET /api/rooms` - Get all rooms
- `GET /api/rooms/available?checkIn=DATE&checkOut=DATE` - Get available rooms
- `GET /api/rooms/:id` - Get room details

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get user's bookings
- `GET /api/bookings/:id` - Get booking details
- `POST /api/bookings/:id/cancel` - Cancel booking

## Sample Rooms

The system comes with 6 pre-loaded rooms:

1. **Single Room (101)** - $79/night - Capacity: 1
2. **Double Room (102)** - $99/night - Capacity: 2
3. **Double Room (103)** - $99/night - Capacity: 2
4. **Suite (201)** - $149/night - Capacity: 3
5. **Suite (202)** - $149/night - Capacity: 3
6. **Deluxe Suite (203)** - $199/night - Capacity: 4

## Usage

### Creating an Account
1. Click "Login/Register" in the navigation
2. Switch to the "Register" tab
3. Fill in all required fields
4. Click "Register"

### Booking a Room
1. Login to your account
2. Click "Rooms" or "Get Started"
3. Select check-in and check-out dates
4. Click "Search Availability"
5. Select a room and click "View Details"
6. Click "Book Now"
7. Enter guest count and any special requests
8. Click "Confirm Booking"

### Viewing Bookings
1. Click "My Bookings" in the navigation
2. View all your confirmed and cancelled bookings
3. Cancel a booking if needed

## Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery 3.6.0
- Bootstrap 5.1.3

### Backend
- Node.js
- Express.js 4.18.2
- jsonwebtoken 9.0.0 (JWT authentication)
- bcryptjs 2.4.3
- UUID 9.0.0

## Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. **Login**: User submits credentials → Server validates → Server generates JWT → Token sent to client
2. **Token Storage**: Client stores JWT in localStorage
3. **Authenticated Requests**: Client sends JWT in Authorization header (`Bearer <token>`)
4. **Token Verification**: Server validates JWT for protected routes
5. **Logout**: Client removes token from localStorage

Token expires after 24 hours. The secret key should be set via environment variable in production.

## Database

The application uses an in-memory database stored in `database.js`. All data is reset when the server restarts.

## Future Enhancements

- Persistent database (MongoDB, PostgreSQL, etc.)
- Email notifications
- Payment processing
- Admin dashboard
- Room ratings and reviews
- Multi-language support
- Advanced search filters

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please reach out to the development team.
