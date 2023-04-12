/*Author: Sumit Kumar B00904097*/
const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/categories.controller');
const Auth = require('../middleware/auth');

router.post('/', Auth.verifyToken, CategoryController.createCategory);
router.get('/', Auth.verifyToken, CategoryController.getCategories);
router.get('/:id', Auth.verifyToken, CategoryController.getCategorieById);
router.delete('/', Auth.verifyToken, CategoryController.deleteCategory);

module.exports = router;