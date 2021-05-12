// pull in the express package
const express = require('express');
// add the logger
const error = require('debug')('web:error');
// create an express app
const app = express();

// setup a folder to hold all the static files
app.use(express.static('public'));

// four params are required to mark this as an error handling middleware
// the comment below allows for eslint to not throw an error
// because I am not using the next function
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  error('ERROR FOUND:', err);
  res.sendStatus(500);
});

// export the express app
module.exports = app;
