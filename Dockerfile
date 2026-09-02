FROM node:20-alpine

WORKDIR /app

# Install production deps only (lockfile-aware, with a fallback)
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# App source
COPY app.js ./

EXPOSE 3000
CMD ["node", "app.js"]