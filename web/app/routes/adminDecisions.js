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
// GET /admin/decisions/edit/:id - loads the edit form
router.get('/edit/:id', decisionCtrl.renderEditForm);
// POST /admin/decisions/edit/:id - validate the data and then save it
router.post('/edit/:id', [
  validationCtrl.validate('editDecision'),
  decisionCtrl.renderDecisionFormWithErrors,
  decisionCtrl.saveDecision,
]);
// GET /admin/decisions/delete/:id - deletes a decision
router.get('/delete/:id', [
  validationCtrl.validate('deleteDecision'),
  decisionCtrl.goBackOnError,
  decisionCtrl.deleteDecision,
]);

// export the route from this file
module.exports = router;
