# Dockerfile
FROM node:21.1.0-alpine AS build

# Set the working directory
WORKDIR /usr/src/app
# Copy package files and install dependencies
COPY package.json ./
RUN npm install
# Copy application files and build the production bundle
COPY . .
RUN npm run build
# Stage 2: Production
FROM nginx:1.27.4-alpine
# Set the working directory
WORKDIR /usr/src/app
RUN rm -rf /usr/share/nginx/html/*
# Copy only the built files from the builder stage
COPY --from=build /usr/src/app/out /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]