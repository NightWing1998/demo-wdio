Feature: Astro Nav

	# Scenario: Header Drawer opened test
	# 	Given I am on the astro
	# 	When I click on "#headerDrawer"

	Scenario Outline: Header Drawer List Item check
		Given I am on the astro
		When I click on <element>
		# When I click on "#headerDrawer"
		Then There should be <title> in <div> as <pos> element
		# Then There should be "Featured" in "#headerMobileTVGuide" as "1" element
		Examples:
			| element       | title             | div                           | pos |
			| #headerDrawer | Featured          | #headerMobileTVGuide          | 1   |
			| #headerDrawer | Broadband Bundles | #headerMobileProductsServices | 1   |