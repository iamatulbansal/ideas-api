module.exports = myMiddleware = (request, response, next) => {
  console.log("Authentication Allowed");
  next();
};
