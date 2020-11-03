// require("@wdio/sync");
const expect = require("expect");

describe("Astro tests with reload browsers", function () {
	it("Featured test", async function () {
		await browser.url("/");
		await (await $(`#headerDrawer`)).click();
		await (await $(`#headerMobileProductsServices .jss635`)).click();
		// while (!$(`#headerMobileTVGuide`).isDisplayed()) {}
		await (await $(`#headerMobileTVGuide .jss635`)).click();
		const elements = await $$(
			`#headerMobileTVGuide .mobile-drawer-subcategory`
		);
		// console.log(elements);
		const text = await elements[0].getText();
		expect(text).toBe("Featured");
		// browser.reloadSession();
	});
	it("Broadband bundles test", async function () {
		await browser.url("/");
		await (await $(`#headerDrawer`)).click();
		const elements = await $$(`.mobile-drawer-subcategory`);
		const text = await elements[0].getText();
		expect(text).toBe("Broadband Bundles");
	});

	afterEach(async () => {
		await browser.reloadSession();
	});

	// after(() => {
	// 	browser.deleteSession();
	// });
});
