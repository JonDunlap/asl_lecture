// import teh express router
const router = require('express').Router();
// import the option controller
const optionCtrl = require('../controllers/options');
// GET /options?decisionID=___
router.get('/', optionCtrl.getDecisionOptions);
// GET /options/:id
router.get('/:id', optionCtrl.getOneById);
// POST /options/
router.post('/', optionCtrl.createOption);
// PUT /options/:id
router.put('/:id', optionCtrl.updateOption);
// DELETE /options/:id
router.delete('/:id', optionCtrl.removeOption);
// export the route from this file
module.exports = router;
