/*Author: Sumit Kumar B00904097*/
const Categories = require('../models/categories.model');

const createCategory = async (request, response) => {
    const { categoryname } = request.body;

    const category = new Categories({ categoryname });
    try {
        await category.save();
        response.status(201).json(category);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
};

const getCategories = async (request, response) => {
    try {
        const categories = await Categories.find();
        response.json(categories);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const getCategorieById = async (request, response) => {
  const { id } = request.params;

  try {
      const categorie = await Categories.findById(id);
      if (!categorie) {
          return response.status(404).json({ message: 'Category not found' });
      }
      response.json(categorie);
  } catch (err) {
      response.status(500).json({ message: err.message });
  }
};

const deleteCategory = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedCategory = await Categories.findByIdAndDelete(id);
    if (!deletedCategory) {
      return response.status(404).json({ message: "Category not found" });
    }
    response.json(deletedCategory);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

module.exports = {
    createCategory,
    getCategories,
    deleteCategory,
    getCategorieById
};