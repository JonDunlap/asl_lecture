const jwt = require('jsonwebtoken');

// create the middleware
const protectedRoute = (req, res, next) => {
  // get the token out of the headers
  const { token } = req.headers;

  try {
    // pull the id out of the token using the secret
    const { id } = jwt.verify(token, process.env.SECRET);
    // set the userId so that we can use it later
    req.userId = id;
    // if the user is logged in go to the next middleware
    return next();
  } catch (e) {
    // if there is an error decoding the token send an unauthorized response
    return res.status(401).json({ loggedIn: false });
  }
};

// export the middleware function
module.exports = protectedRoute;
