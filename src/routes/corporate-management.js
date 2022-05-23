module.exports = app => {
  const controller = require('../controllers/corporate-management')();

  app.route('/corporateManagement/v2/register/:cnpj')
    .get(controller.registerGet);

  app.route('/corporateManagement/v2/register/:cnpj')
    .post(controller.registerPost);

  app.route('/corporateManagement/v2/frauds/check/:cnpj')
    .post(controller.fraudsCheck);
}