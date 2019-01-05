const Translate = require('aws-sdk/clients/translate');


// Global variables.
const aws = new Translate();


// Execute requested method.
async function amazontranslate(e) {
  var r = JSON.parse(e.body);
  return new Promise((fres, frej) => aws[r.method](r.params, (err, data) => {
    return err? frej(err):fres(data);
  }));
};

// Handle request.
exports.handler = async (e) => {
  try { return {statusCode: 200, body: JSON.stringify({result: await amazontranslate(e)})}; }
  catch(err) { return {statusCode: 400, body: JSON.stringify({error: err})}; }
};
