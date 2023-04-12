/*Author: Sumit Kumar B00904097*/
const express = require('express');
const router = express.Router();

const MembershipController = require('../controllers/membership.controller');
const Auth = require('../middleware/auth');

router.post('/', Auth.verifyToken, MembershipController.createMembership);
router.get('/', Auth.verifyToken, MembershipController.getMemberships);
router.get('/:id', Auth.verifyToken, MembershipController.getMembershipById);
router.patch('/:id', Auth.verifyToken, MembershipController.updateMembership);
router.delete('/', Auth.verifyToken, MembershipController.deleteMembership);

module.exports = router;