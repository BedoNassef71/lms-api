# Use the official image as a base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Generate Prisma client based on the schema
RUN npx prisma generate

# Expose the port on which the application will run
EXPOSE 3001

# Command to start the application
CMD ["npm", "start"]
