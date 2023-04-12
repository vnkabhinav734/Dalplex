// Author : Venkata Vijaya Rama Raju Mandapati
const TournamentRankings = require('../models/tournamentrankings.model');

const createTournamentRankings = async (request, response) => {
  const { tournament, match, sport, position, name, winrate, score } = request.body;

  const tournamentrankings = new TournamentRankings({ tournament, match, sport, position, name, winrate, score });
  try {
    await tournamentrankings.save();
    response.status(201).json(tournamentrankings);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

const getTournamentRankings = async (request, response) => {
  try {
    const tournamentrankings = await TournamentRankings.find();
    response.json(tournamentrankings);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const getTournamentRankingsById = async (request, response) => {
  const { id } = request.params;

  try {
    const tournamentrankings = await TournamentRankings.findById(id);
    if (!tournamentrankings) {
      return response.status(404).json({ message: 'TournamentRankings not found' });
    }
    response.json(tournamentrankings);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const deleteTournamentRankings = async (request, response) => {
  try {
    const deletedtournamentrankings = await TournamentRankings.deleteMany();
    if (!deletedtournamentrankings) {
      return response.status(404).json({ message: "TournamentRankings not found" });
    }
    response.json(deletedtournamentrankings);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateTournamentRankings = async (request, response) => {
  const { id } = request.params;
  const updates = {
    tournament: request.body.tournament,
    match: request.body.match,
    sport: request.body.sport,
    position: request.body.position,
    name: request.body.name,
    winrate: request.body.winrate,
    score: request.body.score,

  };

  try {
    const tournamentrankings = await TournamentRankings.findByIdAndUpdate(id, updates, { new: true });
    if (!tournamentrankings) {
      return response.status(404).json({ message: "TournamentRankings not found" });
    }
    response.json(tournamentrankings);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = {
  createTournamentRankings,
  getTournamentRankings,
  getTournamentRankingsById,
  deleteTournamentRankings,
  updateTournamentRankings
};