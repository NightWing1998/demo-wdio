require("@wdio/sync");
const expect = require("expect");

describe("Astro tests with reload browsers", function () {
	it("Broadband bundles test", async function () {
		browser.url("/");
		$(`#headerDrawer`).click();
		const elements = $$(`.mobile-drawer-subcategory`);
		const text = elements[0].getText();
		expect(text).toBe("Broadband Bundles");
	});

	it("Featured test", async function () {
		browser.url("/");
		$(`#headerDrawer`).click();
		$(`#headerMobileProductsServices .jss635`).click();
		$(`#headerMobileTVGuide .jss635`).click();
		const elements = $$(`#headerMobileTVGuide .mobile-drawer-subcategory`);
		const text = elements[0].getText();
		expect(text).toBe("Featured");
	});

	afterEach(async () => {
		browser.reloadSession();
	});

	// after(() => {
	// 	browser.deleteSession();
	// });
});
