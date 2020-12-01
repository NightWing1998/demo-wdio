// require("@wdio/sync");
const expect = require("expect");

describe("Testing search on Google", function () {
	before(async function () {
		await browser.url("/");
	});

	it("Navigate to Google and search for Browserstack", async function () {
		await (await $("input[name=q]")).click();
		await browser.keys(["BrowserStack", "Enter"]);
		// await browser.submitForm("form");
		await browser.waitUntil(() => $("#res div").isExisting(), 5000);
		expect(await $$("#res div")).not.toHaveLength(0);
	});

	it("Test for title", async function () {
		expect(await browser.getTitle()).toBe("BrowserStack - Google Search");
	});

	after(async function () {
		if (
			this.test.parent.tests.reduce(
				(previousTestResult, currentTest) =>
					previousTestResult && currentTest.isPassed(),
				true
			)
		) {
			browser.execute(
				`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Great application!!"}}`
			);
		} else {
			let reasons = [];
			this.test.parent.tests.forEach((test) => {
				if (test.isFailed()) {
					if (test.err) reasons.push(test.err.message);
					else reasons.push(test.title + " failed.");
				}
			});
			browser.execute(
				`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "${reasons.toString()}"}}`
			);
		}
	});
});
