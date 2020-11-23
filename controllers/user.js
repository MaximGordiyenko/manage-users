const express = require('express');
const user = express.Router();
const User = require('../model/user');

user.post('/', async (req, res, next) => {
  const { fullname, dob, gender } = req.body;
  
  const user = {
    fullname: fullname,
    dob: dob,
    gender: gender,
  };
  
  try {
    const findUser = await User.find({ fullname: fullname });
    if (findUser.length > 0) return res.status(409).send(`Conflict the ${findUser.length} existed in DB`);
    const createUser = User.create(user);
    return res.status(200).send({ message: `Document with name: "${fullname}" was added to DB` });
  } catch (error) {
    res.status(500).send(error);
  }
});

user.get('/', async (req, res) => {
  const { fullname } = req.query;
  
  if (fullname !== '' || fullname !== undefined  && id === undefined) {
    try {
      const findByName = await User.find({ fullname: fullname });
      if (0 === findByName.length) return res.status(404).send({ message: `Document with user: ${fullname} doesn't found ` });
      return res.status(200).send({
        message: `User with name ${findByName} was found ${findByName.length} in`,
        name: findByName
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  }
});

user.put('/', async (req, res) => {
  const { id, name, dob, gender } = req.body;
  
  console.log(id, name, dob, gender);
  
  const newUserData = {
    fullname: name,
    dob: dob,
    gender: gender,
  }

  try{
    const updatedUserData = await User.findByIdAndUpdate({ _id: id }, newUserData, { new: true });
    if (!updatedUserData) return res.status(500).send({ message: `Document with: ${name} or ${id} doesn't found ` });
    return res.status(200).send(updatedUserData);
  } catch (error) {
    return res.status(500).send(error);
  }
});
module.exports = user;
