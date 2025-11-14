# ---------- BUILD STAGE ----------
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json & yarn.lock first (for caching)
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy app source
COPY . .

# Build the React app
RUN yarn build


# ---------- PRODUCTION STAGE ----------
FROM nginx:alpine

# Copy built files from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 3000

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]