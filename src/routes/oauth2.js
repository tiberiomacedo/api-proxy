module.exports = app => {
  const controller = require('../controllers/oauth2')();

  app.route('/oauth2/v1/tokens')
    .post(controller.oauth2v1);
  
  app.route('/oauth2/v2/token')
    .post(controller.oauth2v2);
}