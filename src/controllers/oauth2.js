const https = require('https');
var querystring = require('querystring');

module.exports = () => {
  const controller = {}

  controller.oauth2v1 = (req, res) => {
    const options = {
      hostname: 'api-hml.telefonica.com.br',
      port: 443,
      path: req.url,
      method: 'POST',
      headers: {
        'oam': req.headers['oam'],
        'app-key': req.headers['app-key'],
        'Authorization': req.headers.authorization,
        'Content-Type': req.headers['content-type']
      }
    }

    const httpsReq = https.request(options, resp => {
      resp.on('data', data => {
        //process.stdout.write(data);
        res.status(resp.statusCode).json(JSON.parse(data));
      })
    })

    httpsReq.write(querystring.stringify(req.body));
    httpsReq.end();
  }

  controller.oauth2v2 = (req, res) => {
    const options = {
      hostname: 'api03.digital.vivo.com.br',
      port: 443,
      path: req.url,
      method: 'POST',
      headers: {
        'x-oauth-identity-domain-name': req.headers['x-oauth-identity-domain-name'],
        'app-key': req.headers['app-key'],
        'Authorization': req.headers.authorization,
        'Content-Type': req.headers['content-type']
      }
    }

    const httpsReq = https.request(options, resp => {
      resp.on('data', data => {
        //process.stdout.write(data);
        res.status(resp.statusCode).json(JSON.parse(data));
      })
    })

    httpsReq.write(querystring.stringify(req.body));
    httpsReq.end();
  }

  return controller;
}