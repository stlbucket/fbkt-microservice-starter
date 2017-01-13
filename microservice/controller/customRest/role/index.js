const fbkt = require('fbkt');
const Promise = require('bluebird');

const businessRules = require('../../../businessRules/index');

module.exports = {
	url:      '/role',
	restEndpoints: {
		getAll: {
			disabled: false,
			auth:     'none',
			handler:  function (callInfo) {
        return businessRules.role.getAll();
			}
		},
		getOne: {
			disabled: false,
			auth:     'none',
      // pathParams: '/:name',
			handler:  function (callInfo) {
        return businessRules.role.findOne({
          where: {
            name: callInfo.params.id
          }
        });
      }
		},
		post: {
			disabled: false,
			auth:     'none',
			handler:  function (callInfo) {
        return businessRules.role.findOrCreate({
          where: {
            name: callInfo.params.name
          }
        });
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
        return businessRules.role.destroy({
          where: {
            name: callInfo.params.name
          }
        });
      }
		},
	}
};
