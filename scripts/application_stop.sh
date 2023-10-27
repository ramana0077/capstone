#!/bin/bash
echo "Running ApplicationStop script for Node.js application"

# Navigate to the frontend directory
cd /var/www/myapp/frontend

# Stop the frontend process (if running)
# Kill all Node.js processes using 'killall'
sudo killall -9 node

# Note: Using 'killall -9' is a forceful way to terminate the processes.
# Be cautious when using it, as it won't allow processes to clean up resources.


