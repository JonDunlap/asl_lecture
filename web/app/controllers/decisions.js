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

  // send the new decision to the api
  const data = await req.API.post('/decisions', { title, type });

  // redirect to the edit decision form
  res.redirect(`/admin/decisions/edit/${data.id}`);
};
