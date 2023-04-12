/*Author: Sumit Kumar B00904097*/
const express = require('express');
const router = express.Router();

const CategoriesCourtController = require('../controllers/categoriescourt.controller');
const Auth = require('../middleware/auth');

router.post('/', Auth.verifyToken, CategoriesCourtController.createCategoriesCourt);
router.get('/', Auth.verifyToken, CategoriesCourtController.getCategoriesCourts);
router.get('/:id', Auth.verifyToken, CategoriesCourtController.getCategoriesCourtById);
router.patch('/:id', Auth.verifyToken, CategoriesCourtController.updateCategoriesCourt);
router.delete('/', Auth.verifyToken, CategoriesCourtController.deleteCategoriesCourt);

module.exports = router;