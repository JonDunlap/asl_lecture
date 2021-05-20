const querystring = require('querystring');
const log = require('debug')('web:request');

exports.renderLogin = (req, res) => {
  res.render('login');
};

exports.redirectToSlack = (req, res) => {
  // the base URL
  const SLACK_URL = 'https://slack.com/oauth/authorize?';
  // convert the object into a query string (?client_id=&scope=&redirect_uri=)
  const params = querystring.stringify({
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.CALLBACK_URL,
    // get the basic info about the user and their email
    scope: 'identity.basic,identity.email',
  });

  log(SLACK_URL + params);
  res.redirect(SLACK_URL + params);
};
