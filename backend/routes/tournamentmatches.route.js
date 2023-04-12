// Author : Venkata Vijaya Rama Raju Mandapati
const express = require('express');
const router = express.Router();

const TournamentMatchesController = require('../controllers/tournamentmatches.controller');
const Auth = require('../middleware/auth');

router.post('/', Auth.verifyToken, TournamentMatchesController.createTournamentMatches);
router.get('/', Auth.verifyToken, TournamentMatchesController.getTournamentMatches);
router.get('/future', Auth.verifyToken, TournamentMatchesController.getFutureTournamentMatches);
router.get('/past', Auth.verifyToken, TournamentMatchesController.getPastTournamentMatches);
router.get('/present', Auth.verifyToken, TournamentMatchesController.getPresentTournamentMatches);
router.get('/:id', Auth.verifyToken, TournamentMatchesController.getTournamentMatchesById);
router.patch('/:id', Auth.verifyToken, TournamentMatchesController.updateTournamentMatches);
router.delete('/', Auth.verifyToken, TournamentMatchesController.deleteTournamentMatches);

module.exports = router;