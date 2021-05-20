// import the express router
const router = require('express').Router();

// load the controller
const decisionCtrl = require('../controllers/decisions');
const authCtrl = require('../controllers/auth');

// GET / - loads the home page
router.get('/', decisionCtrl.renderLanding);
// GET /login - loads the login page
router.get('/login', authCtrl.renderLogin);
// GET /login/slack - sends the user to Slack for authentication
router.get('/login/slack', authCtrl.redirectToSlack);
// GET /slack/callback - the route that is hit when coming from Slack
router.get('/slack/callback', authCtrl.verifySlackCode);

// export the router
module.exports = router;
