// Author : Venkata Vijaya Rama Raju Mandapati
const express = require('express');
const router = express.Router();

const TournamentFindTeamController = require('../controllers/tournamentfindteam.controller');
const Auth = require('../middleware/auth');

router.post('/', Auth.verifyToken, TournamentFindTeamController.createTournamentFindTeam);
router.get('/', Auth.verifyToken, TournamentFindTeamController.getTournamentFindTeam);
router.get('/:id', Auth.verifyToken, TournamentFindTeamController.getTournamentFindTeamById);
router.patch('/:id', Auth.verifyToken, TournamentFindTeamController.updateTournamentFindTeam);
router.delete('/', Auth.verifyToken, TournamentFindTeamController.deleteTournamentFindTeam);

module.exports = router;