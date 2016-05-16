var common = require("mobile-cli-lib"),
	deviceEmitter = common.deviceEmitter,
	devicesService = common.devicesService,
	liveSyncService = common.liveSyncService,
	path = require("path"),
	devicesFound = [];


	///console.log("########################################################", common.companionAppsService.getCompanionAppIdentifier("cordova", "android"));
	common.deviceEmitter.on("deviceFound",  function(deviceInfoData) {
		console.log(" ?????? Found device with identifier: " + deviceInfoData.identifier);
		devicesFound.push(deviceInfoData.identifier);


	});

setTimeout(() => {
	console.log("====================> Currently connected devices: ", devicesService.getDevices());
	console.log("------------ after getting devices");

		// 		Promise.all(common.devicesService.isAppInstalledOnDevices(devicesFound, "com.telerik.appProtonNative"))
		// .then(function(data) {
		// 			console.log("isAppInstalledOnDevices: com.telerik.appProtonNative ", data);
		// 		}, function(err) {
		// 			console.log(err);
		// 		});

	// // Promise.all(common.devicesService.isLiveSyncSupportedForApplication(devicesFound, "com.telerik.myApp"))
	// // 	.then(function(data) {
	// // 				console.log("isLiveSyncSupportedForApplication com.telerik.nat DATA: ", data);
	// // 			}, function(err) {
	// // 				console.log(err);
	// // 			});

	// 			Promise.all(common.devicesService.isLiveSyncSupportedForApplication(devicesFound, "com.telerik.CecoTestProject123"))
	// 	.then(function(data) {
	// 				console.log("isLiveSyncSupportedForApplication com.telerik.CecoTestProject123 DATA: ", data);
	// 			}, function(err) {
	// 				console.log(err);
	// 			});

	var des = devicesFound.map(d => {
		return {"deviceIdentifier": d, "syncToApp": false, "syncToCompanion": true};
	});
	//des.push({"deviceIdentifier": "123", "syncToApp": false, "syncToCompanion": true})
	console.log("#$$$$$$ des", des);
	// Promise.all(
	// liveSyncService.livesync(des,
	// 			 "D:\\Work\\icenium-cli\\scratch\\myNewAppHybrid"
	// 			//  ,
	// 			//  [path.join("D:\\Work\\icenium-cli\\scratch\\appProtonNative","app","components", "homeView", "homeView.xml")]
	// )).then(function(result) {
	// 				console.log("END< RES IS:", result);
	// 			}).catch(function(err) {
	// 				console.log("ERRR: ", err);
	// 				console.log(err.stack);
	// 				// process.exit(1);
	// 			})

	// Promise.all(
	// 	devicesService.deployOnDevices(devicesFound, "D:\\Work\\icenium-cli\\scratch\\myNewNativeapp\\myNewNativeapp.apk", "com.telerik.myNewNativeapp", "nativescript" )
	// ).then(function(result) {
	// 				console.log("END< RES IS:", result);
	// 			}).catch(function(err) {
	// 				console.log("ERRR: ", err);
	// 				console.log(err.stack);
	// 				// process.exit(1);
	// 			})

	// 				Promise.all(
	// 	devicesService.deployOnDevices(devicesFound, "D:\\Work\\icenium-cli\\scratch\\myNewAppHybrid\\myNewAppHybrid.apk", "com.telerik.myNewAppHybrid", "cordova" )
	// ).then(function(result) {
	// 				console.log("END< RES IS:", result);
	// 			}).catch(function(err) {
	// 				console.log("ERRR: ", err);
	// 				console.log(err.stack);
	// 				// process.exit(1);
	// 			})
// 	Promise.all(
// 		liveSyncService.isLiveSyncSupported(devicesFound, "com.telerik.appProtonNative")
// 	).then(function(res) {
// 		console.log("isLiveSyncSupported for com.telerik.appProtonNative = ", res);
// 	}).catch(function(err) {
// 		console.log("isLiveSyncSupported err com.telerik.appProtonNative = ", err);
// 		console.log(err.stack);
// 	});

// 	Promise.all(
// 		liveSyncService.isLiveSyncSupported(devicesFound, "com.android.email")
// 	).then(function(res) {
// 		console.log("isLiveSyncSupported for com.android.email = ", res);
// 	}).catch(function(err) {
// 		console.log("isLiveSyncSupported err com.android.email= ", err);
// 		console.log(err.stack);
// 	});

// Promise.all(
// 		liveSyncService.isLiveSyncSupported(devicesFound, "pesho")
// 	).then(function(res) {
// 		console.log("isLiveSyncSupported for pesho = ", res);
// 	}).catch(function(err) {
// 		console.log("isLiveSyncSupported err pesho= ", err);
// 		console.log(err.stack);
// 	});
console.log("now exiting");
process.exit(0);
}, 12000);

deviceEmitter.on("applicationInstalled", function(deviceId, appId, opts) {
	console.log("app installed", appId, " ==== is ls enabled: ", opts);
});


deviceEmitter.on("applicationUninstalled", function(deviceId, appId) {
	console.log("APP uninstalled ON DEVICE WITH ID: ", deviceId, " app is: ", appId);
});

// deviceEmitter.on("companionAppInstalled", function(deviceId, framework) {
// 	console.log("companionAppInstalled installed ON DEVICE WITH ID: ", deviceId, " app is: ", framework);
// });

// deviceEmitter.on("companionAppUninstalled", function(deviceId, framework) {
// 	console.log("companionAppUninstalled REMOVED!!!! ON DEVICE WITH ID: ", deviceId, " app is: ", framework);
// });

console.log("#########", common.companionAppsService.getAllCompanionAppIdentifiers());
