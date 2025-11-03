FROM node:24.6.0-alpine AS build

# Set working directory
WORKDIR /McDonald_Olando_ui_garden

# Copy package files 
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source code
COPY . .

# Build the application
RUN npm run build

# Build storybook as a static site
RUN npm run build-storybook

FROM nginx:alpine

# Set working directory
WORKDIR /McDonald_Olando_ui_garden

# Copy built files from build stage to nginx
COPY --from=build /McDonald_Olando_ui_garden/build /usr/share/nginx/html
COPY --from=build /McDonald_Olando_ui_garden/storybook-static /usr/share/nginx/html/storybook

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8018
EXPOSE 8018

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
