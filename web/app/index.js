// pull in the express package
const express = require('express');
// add the logger
const error = require('debug')('web:error');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);

// load in the axios middleware
const API = require('./utils/API');

// load routers
const publicRoutes = require('./routes/public');
const adminDecisionRoutes = require('./routes/adminDecisions');
const adminOptionsRoutes = require('./routes/adminOptions');

// create an express app
const app = express();

// session middleware
app.use(
  expressSession({
    // another secret used for encoding session data
    secret: process.env.SECRET,
    // should the session save again if nothing has changed?
    resave: false,
    // should sessions be created if they have no data
    saveUninitialized: false,
    // where to store the session data
    store: new FileStore(),
  })
);

// setup a folder to hold all the static files
app.use(express.static('public'));
// checks to see if the content-type is url-encoded and parses it into req.body
app.use(express.urlencoded({ extended: true }));
// axios middleware
app.use(API);

// set pug as the view engine
app.set('view engine', 'pug');
// set the view folder as the default place to render from
app.set('views', `${__dirname}/views`);

// setup routers
app.use('/', publicRoutes);
app.use('/admin/decisions', adminDecisionRoutes);
app.use('/admin/options', adminOptionsRoutes);

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
