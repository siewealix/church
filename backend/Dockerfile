FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY src ./src
COPY uploads ./uploads
EXPOSE 5000
CMD ["npm", "run", "start"]
