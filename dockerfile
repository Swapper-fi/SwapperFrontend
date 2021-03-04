FROM node:15
WORKDIR /app

COPY package.json .
COPY tsconfig.json .
RUN "yarn"
COPY src/ ./src/
COPY public/ ./public/
