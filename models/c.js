const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    score: Number
});

module.exports = mongoose.model('c', schema);