sap.ui.define([
	"com/ui5/trng/sapui5bootcampactivity05/localService/mockserver"
], (mockserver) => {
	"use strict";

	// initialize the mock server 
	mockserver.init();

	// initialize the embedded component on the HTML page
	sap.ui.require(["sap/ui/core/ComponentSupport"]);
});