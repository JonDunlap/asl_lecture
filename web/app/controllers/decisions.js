exports.renderLanding = async (req, res) => {
  // get public decisions
  const decisions = await req.API.get('/decisions/public');
  // render the landing page from the views and pass it the decisions
  res.render('landing', { decisions });
};
