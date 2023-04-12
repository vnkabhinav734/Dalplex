/*Author: Sumit Kumar B00904097*/
const Profile = require('../models/profile.model');

const createProfile = async (request, response) => {
    const { userid, firstname, lastname, email, phone, address, dob, sex, about } = request.body;

    const profile = new Profile({ userid, firstname, lastname, email, phone, address, dob, sex, about });
    try {
        await profile.save();
        response.status(201).json(profile);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
};

const getProfiles = async (request, response) => {
    try {
        const profile = await Profile.find();
        response.json(profile);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const getProfileById = async (request, response) => {
    const { id } = request.params;

    try {
        const profile = await Profile.findById(id);
        if (!profile) {
            return response.status(404).json({ message: 'Profile not found' });
        }
        response.json(profile);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const deleteProfile = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedprofile = await Profile.findByIdAndDelete(id);
    if (!deletedprofile) {
      return response.status(404).json({ message: "Profile not found" });
    }
    response.json(deletedprofile);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateProfile = async (request, response) => {
  const { id } = request.params;
  const updates = {
    userid: request.body.userid,
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    email: request.body.email,
    phone: request.body.phone,
    address: request.body.address,
    dob: request.body.dob,
    sex: request.body.sex,
    about: request.body.about
  };

  try {
    const profile = await Profile.findByIdAndUpdate(id, updates, { new: true });
    if (!profile) {
      return response.status(404).json({ message: "Profile not found" });
    }
    response.json(profile);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = {
    createProfile,
    getProfiles,
    getProfileById,
    deleteProfile,
    updateProfile
};