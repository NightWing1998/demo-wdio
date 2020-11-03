exports.config = {
	user: process.env.BROWSERSTACK_USERNAME,
	key: process.env.BROWSERSTACK_ACCESS_KEY,
	host: "hub-cloud.browserstack.com",

	specs: ["./tests/web/specs/single.*.spec.js"],
	sync: true,
	coloredLogs: true,
	screenshotPath: "./screenshots",
	waitforTimeout: 9000000,
	framework: "mocha",

	reporters: ["spec"],
	reporterOptions: {
		outputDir: "./reports",
	},

	capabilities: [
		{
			"bstack:options": {
				osVersion: "13",
				deviceName: "iPhone 8",
				appiumVersion: "1.17.0",
				realMobile: "true",
				local: "false",
				buildName: "wdio-astro",
				projectName: "demo-wdio",
				sessionName: "wdio-js iPhone",
			},
		},
		{
			"bstack:options": {
				osVersion: "14",
				deviceName: "iPhone 11",
				appiumVersion: "1.17.0",
				realMobile: "true",
				local: "false",
				buildName: "wdio-astro",
				projectName: "demo-wdio",
				sessionName: "wdio-js iPhone",
			},
		},
		{
			"bstack:options": {
				osVersion: "11",
				deviceName: "iPhone 8 Plus",
				appiumVersion: "1.16.0",
				realMobile: "true",
				local: "false",
				buildName: "wdio-astro",
				projectName: "demo-wdio",
				sessionName: "wdio-js iPhone",
			},
		},
	],

	baseUrl: "https://www.astro.com.my/",

	mochaOpts: {
		timeout: 9000000,
	},

	waitforTimeout: 10000,
	connectionRetryTimeout: 9000000,
	connectionRetryCount: 3,
};
