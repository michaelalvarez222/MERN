const mongoose = require('mongoose');


const JokesSchema = new mongoose.Schema({

    joke: {
        type: String,
        required: [true, "Joke content is required and must be funny!"]
    },
    rating: {
        type: Number,
    }
    // rating: Number
});

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke;