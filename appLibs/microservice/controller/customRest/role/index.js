const fbkt = require('fbkt');
const Promise = require('bluebird');

const dataStore = require('../../../dataStore');


module.exports = {
	url:      '/api/role',
	restEndpoints: {
		getAll: {
			disabled: false,
			auth:     'none',
			handler:  function (callInfo) {
        return dataStore.getAllRoles();
			}
		},
		getOne: {
			disabled: false,
			auth:     'none',
			handler:  function (callInfo) {
        return dataStore.findRole(callInfo.params.name);
      }
		},
		post: {
			disabled: false,
			auth:     'none',
			handler:  function (callInfo) {
				return dataStore.addRole(callInfo.params);
			}
		},
		put: {
			disabled: false,
			auth:     'none',
			handler:  function (callInfo) {
        throw new Error('NOT IMPLEMENTED - /api/role PUT');
			}
		},
		delete: {
			disabled: false,
			auth:     'none',
			handler:  function (callInfo) {
        return dataStore.removeRole(callInfo.params.name);
			}
		},
	}
};
