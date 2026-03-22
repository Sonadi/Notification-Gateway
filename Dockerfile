FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

# Copy the .env file
COPY .env .env

EXPOSE 5056

CMD ["node", "server.js"]
