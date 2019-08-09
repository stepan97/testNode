const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    c: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'c'
    }
});

module.exports = mongoose.model('b', schema);