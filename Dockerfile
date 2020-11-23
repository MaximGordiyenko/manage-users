FROM node:12
WORKDIR /app
COPY bin /app/
COPY controllers /app/
COPY model /app/
COPY public /app/
COPY view /app/
COPY .env /app/
COPY app.js /app/
COPY db.js /app/
COPY docker-compose.yml /app/
COPY Dockerfile /app/
COPY package*.json /app/
COPY README.md /app/
EXPOSE 7000
RUN cd /app && npm install
CMD ["npm", "run", "start"]
