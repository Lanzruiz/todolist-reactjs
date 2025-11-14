# ---------- BUILD STAGE ----------
FROM node:18-alpine AS build

WORKDIR /app

# Install required build tools for CRA + react-scripts
RUN apk add --no-cache python3 make g++ libc6-compat

# Copy only the dependency files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --network-timeout 1000000

# Copy the rest of the app
COPY . .

# Build CRA app
RUN yarn build


# ---------- PRODUCTION STAGE ----------
FROM nginx:alpine

# Copy built output
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]