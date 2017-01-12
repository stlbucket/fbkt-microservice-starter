"use strict";
const fbkt = require('fbkt');
const axios                = require('axios');
const registerServiceRoute = '/api/registerService';

module.exports = (callInfo)=> {
  return fbkt().FbktPipe({
    name: 'registerPermissionService',
    filename: __filename,
    expectedParams: {},
    pipelineParams: {
      'registerServiceResult': 'registerPermissionService.data'
    },
    pipelineSteps: {
      "registerPermissionService": (callInfo)=> {
        const discoveryServiceUrl = fbkt().config.discoveryServiceUrl;
        const registerServiceUrl  = `${discoveryServiceUrl}${registerServiceRoute}`;
        fbkt().clog('permissionServiceExtension', `${registerServiceUrl}`);

        return axios.post(
          `${registerServiceUrl}`,
          {
            name: 'permissionService',
            url: `http://localhost:${process.env.PORT}`
          }
        )
      },
      "reportServices": callInfo => {
        fbkt().clog('REGISTERED WITH DISCOVERY SERVICE', callInfo.params.registerServiceResult);
      }
    }
  }, callInfo);
};