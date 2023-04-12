// Author : Venkata Vijaya Rama Raju Mandapati
const TournamentMatches = require('../models/tournamentmatches.model');

const createTournamentMatches = async (request, response) => {
  const { match, date, time, matchinfo, venue } = request.body;

  const tournamentmatches = new TournamentMatches({ match, date, time, matchinfo, venue });
  try {
    await tournamentmatches.save();
    response.status(201).json(tournamentmatches);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

const getTournamentMatches = async (request, response) => {
  try {
    const tournamentmatches = await TournamentMatches.find();
    response.json(tournamentmatches);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const getFutureTournamentMatches = async (request, response) => {
    try {
      const tournamentmatches = await TournamentMatches.find();
      const tournamentmatches1 = tournamentmatches.filter((item) => 
      new Date(item.date).toISOString().split('T')[0] > new Date().toISOString().split('T')[0]);
      response.json(tournamentmatches1);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  };

  const getPastTournamentMatches = async (request, response) => {
    try {
      const tournamentmatches = await TournamentMatches.find();
      const tournamentmatches1 = tournamentmatches.filter((item) => 
      new Date(item.date).toISOString().split('T')[0] < new Date().toISOString().split('T')[0]);

      response.json(tournamentmatches1);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  };

  const getPresentTournamentMatches = async (request, response) => {
    try {
      const tournamentmatches = await TournamentMatches.find();
      const tournamentmatches1 = tournamentmatches.filter((item) => 
      new Date(item.date).toISOString().split('T')[0] == new Date().toISOString().split('T')[0]);

      response.json(tournamentmatches1);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  };

const getTournamentMatchesById = async (request, response) => {
  const { id } = request.params;

  try {
    const tournamentmatches = await TournamentMatches.findById(id);
    if (!tournamentmatches) {
      return response.status(404).json({ message: 'TournamentMatches not found' });
    }
    response.json(tournamentmatches);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const deleteTournamentMatches = async (request, response) => {
  try {
    const deletedtournamentmatches = await TournamentMatches.deleteMany();
    if (!deletedtournamentmatches) {
      return response.status(404).json({ message: "TournamentMatches not found" });
    }
    response.json(deletedtournamentmatches);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateTournamentMatches = async (request, response) => {
  const { id } = request.params;
  const updates = {
    match: request.body.match,
    date: request.body.date,
    time: request.body.time,
    matchinfo: request.body.matchinfo,
    venue: request.body.venue,
  };

  try {
    const tournamentmatches = await TournamentMatches.findByIdAndUpdate(id, updates, { new: true });
    if (!tournamentmatches) {
      return response.status(404).json({ message: "TournamentMatches not found" });
    }
    response.json(tournamentmatches);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = {
  createTournamentMatches,
  getTournamentMatches,
  getFutureTournamentMatches,
  getPresentTournamentMatches,
  getPastTournamentMatches,
  getTournamentMatchesById,
  deleteTournamentMatches,
  updateTournamentMatches
};