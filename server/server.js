const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const envConfig = dotenv.config();

if (envConfig.error) {
  console.log('.env file does not loaded');
  throw envConfig.error;
}

const usersController = require('./controllers/user');
const database = require('./db');

const server = express();
database.db();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.json());
server.use(cors());

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'view/public')));

server.use('/users', express.static(path.join(__dirname, 'view/users')));
server.use('/user', usersController);

server.listen(process.env.PORT, () => console.log(`tracker running on port: ${process.env.PORT}`));
