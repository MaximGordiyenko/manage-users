const mongoose = require('mongoose');

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
    .then(() => {console.log(`MongoDB is connected with DB: ${url}`)})
    .catch(error => console.log(`There is troubles with connecting to MongoDB ${error}`));
}
