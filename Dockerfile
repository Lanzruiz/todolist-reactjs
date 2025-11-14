FROM node:18-alpine AS build

WORKDIR /app

# Copy only package.json first (cache optimization)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build project
RUN npm run build

# Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]