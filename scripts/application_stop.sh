#!/bin/bash
echo "Running ApplicationStop script for Node.js application"

# Navigate to the frontend directory
cd /var/www/myapp/frontend

# Stop the frontend process (if running)
pid_frontend=$(pgrep -f "npm run dev")
if [ -n "$pid_frontend" ]; then
    echo "Stopping the frontend process (PID: $pid_frontend)..."
    kill -SIGTERM $pid_frontend
else
    echo "Frontend process is not running."
fi

# Navigate to the server directory
cd /var/www/myapp/server

# Stop the server process (if running)
pid_server=$(pgrep -f "npm start")
if [ -n "$pid_server" ]; then
    echo "Stopping the server process (PID: $pid_server)..."
    kill -SIGTERM $pid_server
else
    echo "Server process is not running."
fi

