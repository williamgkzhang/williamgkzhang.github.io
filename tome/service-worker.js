/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	// Set the callback for the install step
	'use strict';

	self.addEventListener('install', function (event) {
	  // Perform install steps
	  console.log("installed");
	});

	self.addEventListener('activate', function (event) {
	  console.log("activated");
	});

	self.addEventListener('push', function (event, other) {
	  console.log('Received a push message %o', event);
	  debugger;

	  var title = 'Yay a message.';
	  var body = 'We have received a push message.';
	  var icon = '/images/icon-192x192.png';
	  var tag = 'simple-push-demo-notification-tag';

	  event.waitUntil(self.registration.showNotification(title, {
	    body: body,
	    icon: icon,
	    tag: tag
	  }));
	});

/***/ }
/******/ ]);