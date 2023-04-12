// Author : Venkata Vijaya Rama Raju Mandapati
const mongoose = require("mongoose");

const tournamentMatchesSchema = new mongoose.Schema({
    match: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    matchinfo: { type: String, required: true },
    venue: { type: String, required: true },
    updatedat: { type: Date, default: Date.now },
    createdat: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TournamentMatches", tournamentMatchesSchema);