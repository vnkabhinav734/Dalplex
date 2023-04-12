/*Author: Sumit Kumar B00904097*/
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

const createUser = async (request, response) => {
    const { firstname, lastname, role, email, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ firstname, lastname, role, email, password: hashedPassword});
    try {
        await user.save();
        response.status(201).json(user);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
};

const getUsers = async (request, response) => {
    try {
        const users = await User.find();
        response.json(users);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const getUserById = async (request, response) => {
    const { id } = request.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }
        response.json(user);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const deleteUser = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return response.status(404).json({ message: "User not found" });
    }
    response.json(deletedUser);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateUser = async (request, response) => {
  const { id } = request.params;
  const updates = {
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    email: request.body.email
  };

  try {
    const user = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    response.json(user);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};
module.exports = {
    createUser,
    getUsers,
    getUserById,
    deleteUser,
    updateUser
};