// Author : Venkata Vijaya Rama Raju Mandapati
const express = require('express');
const router = express.Router();

const TournamentController = require('../controllers/tournament.controller');
const Auth = require('../middleware/auth');

router.post('/', Auth.verifyToken, TournamentController.createTournament);
router.get('/', Auth.verifyToken, TournamentController.getTournaments);
router.delete('/', Auth.verifyToken, TournamentController.deleteTournament);

module.exports = router;