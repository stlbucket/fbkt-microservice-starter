let Fbkt = require('fbkt');
let config = require('./config/dev');
const appLibs = require('./appLibs');

const libs = {
  microservice:	appLibs.microservice
};

const fbkt = Fbkt(config, libs);

fbkt.runServer();