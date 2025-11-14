FROM node:18-alpine AS build

WORKDIR /app

# Copy only dependency files first
COPY package.json yarn.lock ./

# Install ALL dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Build CRA
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]