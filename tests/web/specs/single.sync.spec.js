require("@wdio/sync");
// require("@wdio/sync");
const expect = require("expect");

// PLEASE KEEP IN MIND THE FUNCTIONS ARE NOT ASYNC. MAKING THEM ASYNC WILL CAUSE FLAKINESS IN TESTS
describe("Testing search on Google", function () {
	before(function () {
		browser.url("/");
	});

	it("Navigate to Google and search for Browserstack", function () {
		$("input[name=q]").click();
		browser.keys(["BrowserStack", "Enter"]);
		// browser.submitForm("form");
		browser.waitUntil(() => $("#res div").isExisting(), 5000);
		expect($$("#res div")).not.toHaveLength(0);
	});

	it("Test for title", function () {
		expect(driver.getTitle()).toBe("BrowserStack - Google Search");
	});

	after(function () {
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
