let Fbkt = require('fbkt');
let config = require('./config/dev');
const appLibs = require('./appLibs');

const libs = {
  microservice:	appLibs.microservice
};

console.log('libs', libs);
const fbkt = Fbkt(config, libs);

fbkt.runServer();