// This function creates the session when the user is signed up or logged in and returns 201 status to
// the client as success session creation
exports.createSession = function (req, res, newUser) {
  req.session.regenerate(function () {
    req.session.user = newUser;
    res.sendStatus(201);
  });
};

// Check the user is logged in
exports.isLoggedIn = function (req, res) {
  if (req.session) {
    return !!req.session.user;
  }
  return false;
}; 

// Check if the user is logged in, if its true, the user will be redirected into the next page
exports.checkUser = (req, res, next) => {
  if (!exports.isLoggedIn(req)) {
    res.sendStatus(404);
  } else {
      next();
    }
}; 
