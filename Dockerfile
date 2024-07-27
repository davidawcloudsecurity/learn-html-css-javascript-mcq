# Use the official Nginx image as a base
FROM nginx:latest

# Remove the default index.html provided by Nginx
RUN rm /usr/share/nginx/html/index.html

# Copy your own static files to the Nginx HTML directory
COPY index.htm /usr/share/nginx/html
COPY script.js /usr/share/nginx/html
COPY styles.css /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
