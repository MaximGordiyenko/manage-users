const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
