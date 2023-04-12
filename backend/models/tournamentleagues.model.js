// Author : Venkata Vijaya Rama Raju Mandapati
const mongoose = require("mongoose");

const tournamentLeaguesSchema = new mongoose.Schema({
    league: { type: String, required: true },
    slots: { type: Number, required: true },
    match: { type: String, required: true },
    register: { type: String, required: true },
    sport: { type: String, required: true },
    updatedat: { type: Date, default: Date.now },
    createdat: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TournamentLeagues", tournamentLeaguesSchema);