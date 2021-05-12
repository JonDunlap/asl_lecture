// import the express router
const router = require('express').Router();

// load teh controller
const decisionCtrl = require('../controllers/decisions');

// GET /admin/decisions/new - loads the form to create a new decision
router.get('/new', decisionCtrl.renderDecisionForm);

// export the route from this file
module.exports = router;
