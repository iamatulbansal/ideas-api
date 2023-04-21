const express = require("express");
const app = express();
const port = 8080;

app.use(express.json())
app.use(myMiddleware)
function myMiddleware(request, response, next) {
    console.log("Authentication Allowed")
    next()
}
require('./routes/idea.route')(app)
app.listen(port, () => {
    console.log("Server is running");
});
