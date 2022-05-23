const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors({
    origin: '*'
  }));

  require('../src/routes/oauth2')(app);
  require('../src/routes/corporate-management')(app);
  require('../src/routes/opportunity')(app);
  require('../src/routes/transationalTopaz')(app);
  
  return app;
};