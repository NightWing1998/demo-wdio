Feature: Google Search functionality

	Scenario: Search for BrowserStack
		Given I am on "https://www.google.com"
		When I search for "BrowserStack"
		Then The title should be "BrowserStack - Google Search"