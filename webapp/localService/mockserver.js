sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/Log"
], (MockServer, Log) => {
	"use strict";

	return {
		init() {
			// create
			const oMockServer = new MockServer({ rootUri: "/" });

			// simulate against the metadata and mock data
			oMockServer.simulate("../localService/metadata.xml", {
				sMockdataBaseUrl: "../localService/mockdata",
				bGenerateMissingMockData: true
			});

			// start
			oMockServer.start();

			Log.info("Running the app with mock data");
		}
	};
});