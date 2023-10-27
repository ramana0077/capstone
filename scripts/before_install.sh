#!/bin/bash
echo "Running BeforeInstall script for Node.js application"

# Check Node.js and npm versions
node_version=$(node -v)
npm_version=$(npm -v)

if [ -z "$node_version" ] || [ -z "$npm_version" ]; then
    echo "Node.js and/or npm not found. Installing them..."
    
    # Install Node.js and npm
    curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y npm
    
    # Verify installation
    node_version=$(node -v)
    npm_version=$(npm -v)
    
    if [ -z "$node_version" ] || [ -z "$npm_version" ]; then
        echo "Failed to install Node.js and npm. Please check the installation."
        exit 1
    else
        echo "Node.js version: $node_version"
        echo "npm version: $npm_version"
    fi
else
    echo "Node.js version: $node_version"
    echo "npm version: $npm_version"
fi

