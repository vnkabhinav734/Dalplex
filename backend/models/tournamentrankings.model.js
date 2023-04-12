// Author : Venkata Vijaya Rama Raju Mandapati
const mongoose = require("mongoose");

const tournamentRankingsSchema = new mongoose.Schema({
tournament: { type: String, required: true },
match: { type: String, required: true },
sport: { type: String, required: true },
position: { type: Number, required: true },
name: { type: String, required: true },
winrate: { type: Number, required: true },
score: { type: String, required: true },
updatedat: { type: Date, default: Date.now },
createdat: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TournamentRankings", tournamentRankingsSchema);