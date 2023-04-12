// Author : Venkata Vijaya Rama Raju Mandapati
const express = require('express');
const router = express.Router();

const TournamentRankingsController = require('../controllers/tournamentrankings.controller');
const Auth = require('../middleware/auth');

router.post('/', Auth.verifyToken, TournamentRankingsController.createTournamentRankings);
router.get('/', Auth.verifyToken, TournamentRankingsController.getTournamentRankings);
router.get('/:id', Auth.verifyToken, TournamentRankingsController.getTournamentRankingsById);
router.patch('/:id', Auth.verifyToken, TournamentRankingsController.updateTournamentRankings);
router.delete('/', Auth.verifyToken, TournamentRankingsController.deleteTournamentRankings);

module.exports = router;