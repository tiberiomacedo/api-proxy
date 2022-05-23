const https = require('https');

module.exports = () => {
  const controller = {}

  controller.analytics = (req, res) => {
    const options = {
      hostname: 'api-hml.telefonica.com.br',
      port: 443,
      path: req.url,
      method: 'POST',
      headers: {
        'Authorization': req.headers.authorization,
        'Content-Type': req.headers['content-type'],
        'X-Api-Key': req.headers['x-api-key']
      }
    }

    const httpsReq = https.request(options, resp => {
      resp.on('data', data => {
        //process.stdout.write(data);
        res.status(resp.statusCode).json(JSON.parse(data));
      })
    })

    httpsReq.write(JSON.stringify(req.body));
    httpsReq.end();
  }

  return controller;
}