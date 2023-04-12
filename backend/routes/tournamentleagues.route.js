// Author : Venkata Vijaya Rama Raju Mandapati
const express = require('express');
const router = express.Router();

const TournamentLeaguesController = require('../controllers/tournamentleagues.controller');
const Auth = require('../middleware/auth');

router.post('/', Auth.verifyToken, TournamentLeaguesController.createTournamentLeagues);
router.get('/', Auth.verifyToken, TournamentLeaguesController.getTournamentLeagues);
router.get('/:id', Auth.verifyToken, TournamentLeaguesController.getTournamentLeaguesById);
router.patch('/:id', Auth.verifyToken, TournamentLeaguesController.updateTournamentLeagues);
router.delete('/', Auth.verifyToken, TournamentLeaguesController.deleteTournamentLeagues);

module.exports = router;