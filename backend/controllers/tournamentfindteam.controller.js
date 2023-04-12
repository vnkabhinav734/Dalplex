// Author : Venkata Vijaya Rama Raju Mandapati
const TournamentFindTeam = require('../models/tournamentfindteam.model');

const createTournamentFindTeam = async (request, response) => {
  const { title, subtitle, desc, reqState, sport, gameslots } = request.body;

  const tournamentfindteam = new TournamentFindTeam({ title, subtitle, desc, reqState, sport, gameslots });
  try {
    await tournamentfindteam.save();
    response.status(201).json(tournamentfindteam);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

const getTournamentFindTeam = async (request, response) => {
  try {
    const tournamentfindteam = await TournamentFindTeam.find();
    response.json(tournamentfindteam);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const getTournamentFindTeamById = async (request, response) => {
  const { id } = request.params;

  try {
    const tournamentfindteam = await TournamentFindTeam.findById(id);
    if (!tournamentfindteam) {
      return response.status(404).json({ message: 'TournamentFindTeam not found' });
    }
    response.json(tournamentfindteam);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const deleteTournamentFindTeam = async (request, response) => {
  try {
    const deletedtournamentfindteam = await TournamentFindTeam.deleteMany();
    if (!deletedtournamentfindteam) {
      return response.status(404).json({ message: "TournamentFindTeam not found" });
    }
    response.json(deletedtournamentfindteam);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateTournamentFindTeam = async (request, response) => {
  const { id } = request.params;
  const updates = {
    title: request.body.title,
    subtitle: request.body.subtitle,
    desc: request.body.desc,
    reqState: request.body.reqState,
    sport: request.body.sport,
    gameslots: request.body.gameslots,
    
  };

  try {
    const tournamentfindteam = await TournamentFindTeam.findByIdAndUpdate(id, updates, { new: true });
    if (!tournamentfindteam) {
      return response.status(404).json({ message: "TournamentFindTeam not found" });
    }
    response.json(tournamentfindteam);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = {
  createTournamentFindTeam,
  getTournamentFindTeam,
  getTournamentFindTeamById,
  deleteTournamentFindTeam,
  updateTournamentFindTeam
};