const mongoose = require('mongoose')

const stirSchema = new mongoose.Schema (
    {
        content: {type: String}
    },
    {timestamps: true}
);

const Stir = mongoose.model('Stir', stirSchema);

module.exports = Stir;