const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Joke content is required and must be funny!"]
    },
    price: {
        type: Number,
        required: [true, "this is america, nothings free!"]
    },
    description: {
        type: String,
        required: [true, "Description of item is required"]
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;