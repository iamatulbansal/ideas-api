const ideasControllers = require("../controllers/idea.controller");
const PATH = require("../constants/constant");

module.exports = (app) => {
  app.get(PATH.READ, ideasControllers.fetchAllIdeas);
  app.post(PATH.CREATE, ideasControllers.createIdea);
  app.put(PATH.UPDATE, ideasControllers.updateIdea);
  app.delete(PATH.DELETE, ideasControllers.deleteIdea);
  app.get(PATH.SEARCH, ideasControllers.searchIdea);
};
