const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required round hea!"]
    },
    type: {
        type: String,
        required: [true, "Open to all animals, whats yours?"]
    },
    description: {
        type: String,
        required: [true, "Description of pet is required"]
    }
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;