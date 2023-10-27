# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /frontend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port that the Vite server will run on (default is 3000)
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run","dev", "--", "--host", "0.0.0.0"]

