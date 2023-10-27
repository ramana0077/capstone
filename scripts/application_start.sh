#!/bin/bash
echo "Running ApplicationStart script for Node.js application"

# Navigate to the frontend directory and start the frontend with custom options
cd /var/www/myapp/frontend
nohup npm run dev -- --host 0.0.0.0 > vite.log 2>&1 &

# Navigate to the server directory and start the server
cd /var/www/myapp/server
rm /var/www/myapp/server/node_modules/.bin/nodemon
npm install nodemon --save-dev --force
setsid npm start > start.log 2>&1 < /dev/null &



