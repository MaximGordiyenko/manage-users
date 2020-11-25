const mongoose = require('mongoose');
const dotenv = require('dotenv');
const envConfig = dotenv.config();

if (envConfig.error) {
  console.log('.env file does not loaded');
  throw envConfig.error;
}
// const url_local = `mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORTMANE}/${process.env.MONGO_DB}`
const url = `mongodb+srv://${process.env.USER_DB_NAME}:${process.env.USER_DB_PWS}@cluster0.pgpfv.mongodb.net/${process.env.USER_DB}?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}

module.exports.db = () => {
  mongoose
    .connect(url, options)
    .then(() => {console.log(`MongoDB is connected with DB: ${process.env.MONGO_DB}`)})
    .catch(error => console.log(`There is troubles with connecting to MongoDB ${error}`));
}
