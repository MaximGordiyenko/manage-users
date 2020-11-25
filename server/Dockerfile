# Pull latest node image from docker hub
FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
# Instal dependencies with npm command
RUN npm install

# Bundle app source whare is . means current directory of project and /usr/src/app is Create app directory
COPY . /usr/src/app

# Port for run project like a server port
EXPOSE 7000
CMD [ "npm", "start" ]
