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

const app = express();
database.db();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(logger('dev'));
app.use(express.json());3
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', express.static('view/'))
app.use('/user', usersController);

app.listen(process.env.PORT, () => console.log(`tracker running on port: ${process.env.PORT}`));
