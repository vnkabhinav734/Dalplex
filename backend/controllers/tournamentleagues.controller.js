// Author : Venkata Vijaya Rama Raju Mandapati
const TournamentLeagues = require('../models/tournamentleagues.model');

const createTournamentLeagues = async (request, response) => {
  const { league, slots, match, register, sport } = request.body;

  const tournamentleagues = new TournamentLeagues({ league, slots, match, register, sport });
  try {
    await tournamentleagues.save();
    response.status(201).json(tournamentleagues);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

const getTournamentLeagues = async (request, response) => {
  try {
    const tournamentleagues = await TournamentLeagues.find();
    response.json(tournamentleagues);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const getTournamentLeaguesById = async (request, response) => {
  const { id } = request.params;

  try {
    const tournamentleagues = await TournamentLeagues.findById(id);
    if (!tournamentleagues) {
      return response.status(404).json({ message: 'TournamentLeagues not found' });
    }
    response.json(tournamentleagues);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const deleteTournamentLeagues = async (request, response) => {
  try {
    const deletedtournamentleagues = await TournamentLeagues.deleteMany();
    if (!deletedtournamentleagues) {
      return response.status(404).json({ message: "TournamentLeagues not found" });
    }
    response.json(deletedtournamentleagues);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateTournamentLeagues = async (request, response) => {
  const { id } = request.params;
  const updates = {
    league: request.body.league,
    match: request.body.match,
    sport: request.body.sport,
    slots: request.body.slots,
    register: request.body.register,

  };

  try {
    const tournamentleagues = await TournamentLeagues.findByIdAndUpdate(id, updates, { new: true });
    if (!tournamentleagues) {
      return response.status(404).json({ message: "TournamentLeagues not found" });
    }
    response.json(tournamentleagues);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = {
  createTournamentLeagues,
  getTournamentLeagues,
  getTournamentLeaguesById,
  deleteTournamentLeagues,
  updateTournamentLeagues
};