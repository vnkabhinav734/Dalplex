// Author : Venkata Vijaya Rama Raju Mandapati
const Facilities = require('../models/facilities.model');

const createFacilities = async (request, response) => {
  const { title, subtitle, occ, desc, foot, state, img, w, slots } = request.body;

  const facilities = new Facilities({ title, subtitle, occ, desc, foot, state, img, w, slots });
  try {
    await facilities.save();
    response.status(201).json(facilities);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

const getFacilities = async (request, response) => {
  try {
    const facilities = await Facilities.find();
    response.json(facilities);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const getFacilitiesById = async (request, response) => {
  const { id } = request.params;

  try {
    const facilities = await Facilities.findById(id);
    if (!facilities) {
      return response.status(404).json({ message: 'Facilities not found' });
    }
    response.json(facilities);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const deleteFacilities = async (request, response) => {
  try {
    const deletedfacilities = await Facilities.deleteMany();
    if (!deletedfacilities) {
      return response.status(404).json({ message: "Facilities not found" });
    }
    response.json(deletedfacilities);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateFacilities = async (request, response) => {
  const { id } = request.params;
  const updates = {
    title: request.body.title,
    subtitle: request.body.subtitle,
    occ: request.body.occ,
    state: request.body.state,
    desc: request.body.desc,
    foot: request.body.foot,
    img: request.body.img,
    w: request.body.w
  };

  try {
    const facilities = await Facilities.findByIdAndUpdate(id, updates, { new: true });
    if (!facilities) {
      return response.status(404).json({ message: "Facilities not found" });
    }
    response.json(facilities);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = {
  createFacilities,
  getFacilities,
  getFacilitiesById,
  deleteFacilities,
  updateFacilities
};