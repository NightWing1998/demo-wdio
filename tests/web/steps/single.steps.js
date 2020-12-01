require("@wdio/sync");
const { Given, When, Then, After } = require("cucumber");
const expect = require("expect");
// module.exports = function () {
Given(/I am on "(.*)"/, (url) => {
	browser.url(url);
});

When(/I search for "(.*)"/, (searchText) => {
	$("input[name=q]").click();
	browser.keys([searchText, "Enter"]);

	browser.waitUntil(() => $("#res div").isExisting(), 5000);
	expect($$("#res div")).not.toHaveLength(0);
});

Then(/The title should be "(.*)"/, (title) => {
	expect(driver.getTitle()).toBe(title);
});

After((res) => {
	if (res.result.exception) {
		browser.executeScript(
			`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "${res.result.exception.message}"}}`
		);
	} else {
		browser.executeScript(
			`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "tests are cleared"}}`
		);
	}
});
// };
