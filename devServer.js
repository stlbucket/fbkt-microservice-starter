let Fbkt = require('fbkt');
let config = require('./config');
const microservice = require('./microservice');

const libs = {
  permissionService:	microservice
};

console.log('libs', libs);
const fbkt = Fbkt(config, libs);

fbkt.runServer();