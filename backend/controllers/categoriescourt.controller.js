/*Author: Sumit Kumar B00904097*/
const CategoriesCourt = require('../models/categorycourt.model');

const createCategoriesCourt = async (request, response) => {
    const { categoryid, court, name, description, price } = request.body;

    const categoryCourt = new CategoriesCourt({ categoryid, court, name, description, price });
    try {
        await categoryCourt.save();
        response.status(201).json(categoryCourt);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
};

const getCategoriesCourts = async (request, response) => {
    try {
        const categoryCourt = await CategoriesCourt.find();
        response.json(categoryCourt);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const getCategoriesCourtById = async (request, response) => {
    const { id } = request.params;

    try {
        const categoryCourt = await CategoriesCourt.findById(id);
        if (!categoryCourt) {
            return response.status(404).json({ message: 'CategoriesCourt not found' });
        }
        response.json(categoryCourt);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const deleteCategoriesCourt = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedcategoryCourt = await CategoriesCourt.findByIdAndDelete(id);
    if (!deletedcategoryCourt) {
      return response.status(404).json({ message: "CategoriesCourt not found" });
    }
    response.json(deletedcategoryCourt);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateCategoriesCourt = async (request, response) => {
  const { id } = request.params;
  const updates = {
    categoryid: request.body.categoryid,
    court: request.body.court,
    name: request.body.name,
    description: request.body.description,
    price: request.body.price
  };

  try {
    const categoryCourt = await CategoriesCourt.findByIdAndUpdate(id, updates, { new: true });
    if (!categoryCourt) {
      return response.status(404).json({ message: "CategoriesCourt not found" });
    }
    response.json(categoryCourt);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = {
    createCategoriesCourt,
    getCategoriesCourts,
    getCategoriesCourtById,
    deleteCategoriesCourt,
    updateCategoriesCourt
};