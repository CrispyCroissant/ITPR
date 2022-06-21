FROM node:alpine as base
WORKDIR /app

COPY package*.json ./
RUN npm install --silent

COPY . .

RUN npm run build

EXPOSE 3000