#!/bin/bash
echo "Running ApplicationStop script for Node.js application"

# Navigate to the frontend directory
cd /var/www/myapp/frontend
sudo killall -9 node

echo "success"
# Note: Using 'killall -9' is a forceful way to terminate the processes.
# Be cautious when using it, as it won't allow processes to clean up resources.


