module.exports = app => {
  const controller = require('../controllers//transationalTopaz')();

  app.route('/transationalTopaz/v1/analytics')
    .post(controller.analytics);
}