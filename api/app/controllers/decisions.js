// load in the decisions model
const { Decisions } = require('../models');

// get all the decisions
exports.getAll = (req, res) => {
  // run the find all function on the model
  const decisions = Decisions.findAll();
  // respond with json of the decisions array
  res.json(decisions);
};

// get all the decisions with a type of public
exports.getPublic = (req, res) => {
  // run the find all function on the model
  const decisions = Decisions.findAll();
  // filter the decisions to only the decisions who have a type of 'public'
  const publicDecisions = decisions.filter(
    (decision) => decision.type === 'public',
  );
  // respond with json of the public decisions array
  res.json(publicDecisions);
};

// find one decision by id
exports.getOneById = (req, res) => {
  // get the id from the route parameter
  const { id } = req.params;
  // search our decision model for the decision
  const decision = Decisions.findByPk(id);
  // if no decision is found
  if (!decision) {
    // return a 404 (not found) error
    res.sendStatus(404);
    return;
  }

  // if the decision is found send it back
  res.json(decision);
};

// add a new decision
exports.createDecision = (req, res) => {
  // get the title and type values from the request body
  const { title, type } = req.body;
  // create the item and save the new id
  const id = Decisions.create({ title, type });
  // send the new id back to the request
  res.json({ id });
};

// update an existing decision
exports.updateDecision = (req, res) => {
  const { id } = req.params;
  const updatedDecisions = Decisions.update(req.body, id);
  res.json(updatedDecisions);
};

// delete a decision
exports.removeDecision = (req, res) => {
  // get the id from the route
  const { id } = req.params;
  // remove the decision
  Decisions.destroy(id);
  // send a good status code
  res.sendStatus(200);
};
