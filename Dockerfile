FROM node:latest

WORKDIR /app/

COPY controllers /app/
COPY model /app/
COPY public /app/
COPY view /app/
COPY .env /app/
COPY server.js /app/
COPY db.js /app/
COPY package*.json /app/
COPY README.md /app/

RUN npm install

EXPOSE 2000

CMD ["npm", "start"]
