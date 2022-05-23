module.exports = app => {
  const controller = require('../controllers/opportunity')();

  app.route('/opportunity/v2/signit')
    .post(controller.signit);
}