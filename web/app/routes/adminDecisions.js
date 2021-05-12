// import the express router
const router = require('express').Router();

// load teh controller
const decisionCtrl = require('../controllers/decisions');
const validationCtrl = require('../controllers/validation');

// GET /admin/decisions/new - loads the form to create a new decision
router.get('/new', decisionCtrl.renderDecisionForm);
// POST /admin/decisions/new - validate the data and then save it
router.post('/new', [
  validationCtrl.validate('createDecisions'),
  decisionCtrl.renderDecisionFormWithErrors,
  decisionCtrl.saveDecision,
]);

// export the route from this file
module.exports = router;
