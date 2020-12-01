exports.config = {
	user: process.env.BROWSERSTACK_USERNAME,
	key: process.env.BROWSERSTACK_ACCESS_KEY,
	host: "hub-cloud.browserstack.com",

	specs: ["./tests/web/specs/*.spec.js"],
	// sync: true, // enabling this introduces falkiness. Do not enable
	coloredLogs: true,
	screenshotPath: "./screenshots",
	waitforTimeout: 9000000,
	framework: "mocha",

	reporters: ["spec"],
	reporterOptions: {
		outputDir: "./reports",
	},

	// maxInstances: 1,

	capabilities: [
		{
			"bstack:options": {
				os: "OS X",
				osVersion: "Catalina",
				local: "false",
				buildName: "demo-wdio",
				projectName: "demo-wdio",
				sessionName: "wdio-js mocha Maccat firefox latest",
			},
			maxInstances: 1,
			browserName: "Firefox",
			browserVersion: "latest",
		},
		{
			"bstack:options": {
				os: "OS X",
				osVersion: "High Sierra",
				local: "false",
				buildName: "demo-wdio",
				projectName: "demo-wdio",
				sessionName: "wdio-js mocha Machs Safari 11",
			},
			maxInstances: 1,
			browserName: "Safari",
			browserVersion: "11.0",
		},
		{
			"bstack:options": {
				os: "Windows",
				osVersion: "7",
				local: "false",
				buildName: "demo-wdio",
				projectName: "demo-wdio",
				sessionName: "wdio-js mocha win7 edge latest",
			},
			maxInstances: 1,
			browserName: "Edge",
			browserVersion: "latest",
		},
	],

	baseUrl: "https://www.google.com/",

	mochaOpts: {
		timeout: 9000000,
	},

	waitforTimeout: 10000,
	connectionRetryTimeout: 9000000,
	connectionRetryCount: 3,
};
