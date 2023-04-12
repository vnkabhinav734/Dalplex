// Author : Venkata Vijaya Rama Raju Mandapati
const Tournaments = require('../models/tournament.model');

const createTournament = async (request, response) => {
    const { tournamentname } = request.body;

    const tournament = new Tournaments({ tournamentname });
    try {
        await tournament.save();
        response.status(201).json(tournament);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
};

const getTournaments = async (request, response) => {
    try {
        const tournaments = await Tournaments.find();
        response.json(tournaments);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const deleteTournament = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedTournament = await Tournaments.deleteMany(id);
    if (!deletedTournament) {
      return response.status(404).json({ message: "Tournament not found" });
    }
    response.json(deletedTournament);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

module.exports = {
    createTournament,
    getTournaments,
    deleteTournament
};