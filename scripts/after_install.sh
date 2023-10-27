#!/bin/bash
echo "Running AfterInstall script for Node.js application"

# Navigate to the frontend directory
cd /var/www/myapp/frontend

# Install frontend dependencies
npm install

# Navigate to the server directory
cd /var/www/myapp/server

# Install server dependencies
npm install

# Additional setup or configuration steps if needed

