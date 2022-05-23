const https = require('https');

module.exports = () => {
  const controller = {}

  controller.signit = (req, res) => {
    const options = {
      hostname: 'api03.digital.vivo.com.br',
      port: 443,
      path: req.url,
      method: 'POST',
      headers: {
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

    httpsReq.write(JSON.stringify(req.body));
    httpsReq.end();
  }

  return controller;
}