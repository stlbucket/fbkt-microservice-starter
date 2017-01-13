module.exports = {
	packageName:	'vos-permission-service',
	libRelativePath:	function(){
		return __dirname;
	},
	// serverCommandMap:	require('./serverCommandMap'),
	// serverExtensions:	require('./serverExtensions'),
  startupPackage: require('./startupPackage/index'),
  customRestControllers:	[
    require('./controller/customRest/role/index'),
	],
};