// load in the option model
const { Options } = require('../models');
// get all the options that belong to one decision
exports.getDecisionOptions = (req, res) => {
  // get the decision id from the query
  const { decisionId } = req.query;
  // run the find all function on the model
  const options = Options.findAll();
  // filter the options to only options for this decision
  const decisionOptions = options.filter(
    (option) => option.decisionId === decisionId,
  );
  // respond with json of the decision's option array
  res.json(decisionOptions);
};

// find one option by id
exports.getOneById = (req, res) => {
  // get the id from the route params
  const { id } = req.params;
  // search our option model for the option
  const option = Options.findByPk(id);
  // if no option is found
  if (!option) {
    // return a 404 (not found) code
    res.sendStatus(404);
    return;
  }
  // if the option is found send it back
  res.json(option);
};

// add a new option
exports.createOption = (req, res) => {
  // get the title and type value from the request body
  const { value, decisionId } = req.body;
  // create the item and save the new id
  const id = Options.create({ value, decisionId });
  // send the new id back to the request
  res.json({ id });
};

// update an existing option
exports.updateOption = (req, res) => {
  // get the id from the route params
  const { id } = req.params;
  // update the option with any data from the req.body and the id
  const updateOption = Options.update(req.body, id);
  // respond with the updated option
  res.json(updateOption);
};

// delete an option
exports.removeOption = (req, res) => {
  // get the id from the route
  const { id } = req.params;
  // remove the option
  Options.destroy(id);
  // send a good status code
  res.sendStatus(200);
};
