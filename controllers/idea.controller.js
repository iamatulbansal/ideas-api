
const ideas = require("../models/idea.model");
let idCount = 1;
/* 
read Data
*/

exports.fetchAllIdeas = (request, response) => {
    if (Object.keys(ideas).length !== 0) {
        response.status(200).send(ideas);
    } else {
        response.status(400).send({
            message: "Don't Have any ideas, Please Create a New idea Thank you!"
        });
    }

};

/* 
create Data
*/

exports.createIdea = (request, response) => {
    const idea = request.body;
    idea.id = ++idCount;
    ideas[idCount] = idea;
    response.status(201).send({
        message: "New idea created successfully",
    });
};
/* 
update Data
*/
exports.updateIdea = (request, response) => {
    const ideaId = request.params.id;
    if (ideas[ideaId]) {
        ideas[ideaId] = request.body;
        response.status(200).send({
            message: "Idea is successfully updated!",
        });
    } else {
        response.status(404).send({
            message: "Ops! dose not have this id",
        });
    }
};
/* 
delete data
*/
exports.deleteIdea = (request, response) => {
    if (ideas[request.params.id]) {
        delete ideas[request.params.id];
        response.status(200).send({
            message: "Idea successfully deleted!",
        });
    } else {
        response.status(404).send({
            message: "Ops! wrong id, Please give a valid id",
        });
    }
};
