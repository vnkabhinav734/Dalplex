// Author : Venkata Vijaya Rama Raju Mandapati
const mongoose = require("mongoose");

const tournamentFindTeamSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    desc: { type: String, required: true },
    reqState: { type: String, required: true },
    sport: { type: String, required: true },
    gameslots: { type: String, required: true },
    updatedat: { type: Date, default: Date.now },
    createdat: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TournamentFindTeam", tournamentFindTeamSchema);