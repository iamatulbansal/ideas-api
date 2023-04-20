const ideasControllers = require('../controllers/idea.controller');

module.exports = (app) => {
    app.get('/api/v1/ideas', ideasControllers.fetchAllIdeas);
    app.post("/api/v1/ideas", ideasControllers.createIdea);
    app.put("/api/v1/ideas/:id", ideasControllers.updateIdea);
    app.delete("/api/v1/ideas/:id", ideasControllers.deleteIdea);

}