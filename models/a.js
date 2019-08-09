const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    b: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'b'
    }
});

module.exports = mongoose.model('a', schema);