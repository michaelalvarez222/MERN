const Joke = require("../models/jokes.model")



module.exports.helloworld = (req, res) => {
    res.json({ message: "Hello World" });
};
