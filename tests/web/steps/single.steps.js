require("@wdio/sync");
const { Given, When, Then, After } = require("cucumber");
const expect = require("expect");
// module.exports = function () {
Given(/I am on the astro/, () => {
	browser.url("/");
});

When(/I click on (.*)/, (element) => {
	$(`${element}`).click();
});

Then(/There should be (.*) in (.*) as (.*) element/, (title, div, pos) => {
	pos = parseInt(pos) - 1;
	$(`#headerMobileProductsServices .jss635`).click();
	$(`${div} .jss635`).click();
	const elements = $$(`${div} .mobile-drawer-subcategory`);
	const text = elements[0].getText();
	expect(text).toBe(title);
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
	browser.reloadSession();
});
// };
