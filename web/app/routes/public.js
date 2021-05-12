// import the express router
const router = require('express').Router();

// load the controller
const decisionCtrl = require('../controllers/decisions');

// GET / - loads the home page
router.get('/', decisionCtrl.renderLanding);

// export the router
module.exports = router;
