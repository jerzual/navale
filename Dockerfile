# Start from a Debian image with the latest version of node installed
FROM node:18-buster-slim as builder

# Copy the local package files to the container's workspace.
COPY package-lock.json .
COPY package.json .
RUN npm ci

# Copy stuff needed for build
COPY tsconfig.json .
COPY .eslintrc.json .
COPY .prettierrc.json .
COPY src .
RUN npm run build

FROM node:18-buster-slim as runner
WORKDIR /usr/app
COPY --from=builder dist .
COPY --from=builder node_modules .

# Document that the service listens on port 8080.
EXPOSE 8080

CMD [ "node", "dist/index.js" ]
