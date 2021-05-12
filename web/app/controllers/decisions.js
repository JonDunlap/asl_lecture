exports.renderLanding = async (req, res) => {
  // get public decisions
  const decisions = await req.API.get('/decisions/public');
  // render the landing page from the views and pass it the decisions
  res.render('landing', { decisions });
};

exports.renderDecisionForm = (req, res) => {
  res.render('decisions/form', { title: '', type: 'private' });
};

// four params are required to mark this as an error handling middleware
// eslint-disable-next-line no-unused-vars
exports.renderDecisionFormWithErrors = (errors, req, res, next) => {
  // get the data the user submitted
  const { title, type } = req.body;

  // send the title, type, and errors as variables to the view
  res.render('decisions/form', { title, type, errors });
};

exports.saveDecision = async (req, res) => {
  // get the data the user submitted
  const { title, type } = req.body;
  // pull the id from the request params
  const { id } = req.params;

  // variable to hold the data from our api request
  let data = {};

  // if there is an id, we are editing, if there isn't we are adding
  if (id) {
    // make a put request with the updated information
    data = await req.API.put(`/decisions/${id}`, { title, type });
  } else {
    // send the new decision to the API
    data = await req.API.post('/decisions', { title, type });
  }

  // redirect to the edit decision form
  res.redirect(`/admin/decisions/edit/${data.id}`);
};

exports.renderEditForm = async (req, res) => {
  // get the id from the request params
  const { id } = req.params;

  // get the details of the decision
  const decision = await req.API.get(`/decisions/${id}`);

  // render the edit form
  res.render('decisions/form', decision);
};

// four params are required to mark this as an error handling middleware
//  eslint-disable-next-line no-unused-vars
exports.goBackOnError = (errors, req, res, next) => {
  // passing 'back' to redirect sends the user back to the page they came from
  res.redirect('back');
};

exports.deleteDecision = async (req, res) => {
  const { id } = req.params;

  // send the delete request to the API
  await req.API.delete(`/decisions/${id}`);

  // redirect to the dashboard
  res.redirect('/admin/decisions');
};

exports.renderDashboard = async (req, res) => {
  const decisions = await req.API.get('/decisions');

  res.render('decisions/list', { decisions });
};

exports.renderAdminDetail = async (req, res) => {
  const { id } = req.params;

  // get the details of the decision
  const decision = await req.API.get(`/decisions/${id}`);
  // get the options for this decision
  const options = await req.API.get(`/options?decisionId=${id}`);

  res.render('decisions/detail', { decision, options });
};
