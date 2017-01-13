let Fbkt = require('fbkt');
let config = require('./config/dev');
const microservice = require('./microservice');

const libs = {
  permissionService:	microservice
};

console.log('libs', libs);
const fbkt = Fbkt(config, libs);

fbkt.runServer();