const JokeController = require("../controllers/joke.controller")

module.exports = app => {
    app.get("/api", JokeController.helloworld)
    app.get("/api/jokes", JokeController.findAllJokes)
    app.post("/api/jokes/create", JokeController.createNewJoke)
    app.get("/api/jokes/:id", JokeController.findOneJoke)
    app.put("/api/jokes/:id", JokeController.updateJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
    app.get("/api/jokes/find/random", JokeController.findRandomJoke)
}