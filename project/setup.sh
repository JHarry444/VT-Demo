#!/bin/bash

# QA Hotel Quick Start Script

echo "========================================"
echo "QA Hotel - Quick Start"
echo "========================================"
echo ""

# Check if Node is installed
if ! command -v node &> /dev/null
then
    echo "Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✓ Node.js found: $(node --version)"
echo "✓ npm found: $(npm --version)"
echo ""

# Navigate to backend and install dependencies
echo "Installing backend dependencies..."
cd backend
npm install

if [ $? -ne 0 ]; then
    echo "Error: Failed to install dependencies"
    exit 1
fi

echo ""
echo "========================================"
echo "✓ Installation complete!"
echo "========================================"
echo ""
echo "To start the server, run:"
echo "  cd backend"
echo "  npm start"
echo ""
echo "Then open your browser to:"
echo "  http://localhost:5000"
echo ""
echo "Demo credentials:"
echo "  Username: demo"
echo "  Password: demo123"
echo ""
