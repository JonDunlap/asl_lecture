// import the express router
const router = require('express').Router();
// import the decision controller
const decisionCtrl = require('../controllers/decisions');
// GET /decisions route
router.get('/', decisionCtrl.getAll);
// GET /decisions/public
router.get('/public', decisionCtrl.getPublic);
// GET /decisions/public/:id
router.get('/:id', decisionCtrl.getOneById);
// POST /decisions
router.post('/', decisionCtrl.createDecision);
// PUT /decisions/:id
router.put('/:id', decisionCtrl.updateDecision);
// DELETE /decisions/:id
router.delete('/:id', decisionCtrl.removeDecision);
// export the route from this file
module.exports = router;
