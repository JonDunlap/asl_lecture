const axios = require('axios');
const error = require('debug')('api:error');

exports.exchangeCode = async (req, res) => {
  // pull the code from the request body
  const { code, url } = req.body;

  try {
    // maek a request to slack for the access token
    const { data } = await axios.get('https://slack.com/api/oauth.access', {
      params: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: url,
        code,
      },
    });

    console.log(data);
  } catch (e) {
    // log the error
    error(e);
    // send an unauthorized response if something above fails to work
    res.status(401).json({ loggedIn: false });
  }
};
