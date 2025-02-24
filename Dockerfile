# Base image con Node.js
FROM node:lts AS base

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

# CMD ["npx", "run", "build"] // Build del proyecto
CMD ["npx", "rsbuild", "dev"]