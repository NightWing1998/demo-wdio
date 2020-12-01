exports.config = {
	user: process.env.BROWSERSTACK_USERNAME,
	key: process.env.BROWSERSTACK_ACCESS_KEY,
	host: "hub-cloud.browserstack.com",

	specs: ["./tests/web/feature/single.feature"],
	sync: true,
	coloredLogs: true,
	screenshotPath: "./screenshots",
	waitforTimeout: 9000000,
	framework: "cucumber",

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
				sessionName: "wdio-js cucumber Maccat firefox latest",
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
				sessionName: "wdio-js cucumber Machs Safari 11",
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
				sessionName: "wdio-js cucumber win7 edge latest",
			},
			maxInstances: 1,
			browserName: "Edge",
			browserVersion: "latest",
		},
	],

	waitforTimeout: 10000,
	connectionRetryTimeout: 9000000,
	connectionRetryCount: 3,

	cucumberOpts: {
		require: ["./tests/web/steps/single.steps.js"], // <string[]> (file/dir) require files before executing features
		backtrace: true, // <boolean> show full backtrace for errors
		dryRun: false,
		failFast: false,
		format: ["pretty"],
		colors: true,
		snippets: true,
		source: true,
		strict: true,
		timeout: 9000000,
		ignoreUndefinedDefinitions: false,
	},
};
