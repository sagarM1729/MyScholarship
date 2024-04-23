# Use a base image with a web server
FROM nginx:alpine

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Create a directory for website files in the container
RUN mkdir -p /usr/share/nginx/html

# Set the working directory to the location of the Dockerfile
WORKDIR /usr/share/nginx/html

# Copy the website files from the Home_page directory into the container
COPY Home_page/index.html .

# Copy custom Nginx configuration
COPY Home_page/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80
