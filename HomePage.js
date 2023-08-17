// Locators
export const locators = {
    navBarTitle: '//a[@class="navbar-brand"]',
    emailInput: '//div[@id="test-1-div"]//form[@class="form-signin"]//input[@type="email"]',
    passwordInput: '//div[@id="test-1-div"]//form[@class="form-signin"]//input[@type="password"]',
    loginButton: '//div[@id="test-1-div"]//form[@class="form-signin"]//button[@type="submit"]',
    unorderedListGroup: '//div[@id="test-2-div"]//ul//li',
    secondBadge: '//div[@id="test-2-div"]//li[2]//span[contains(@class, "badge")]',
    dropdownMenuButton: '//div[@id="test-3-div"]//button[@id="dropdownMenuButton"]',
    dropdownMenuList: '//div[@id="test-3-div"]//div[@class="dropdown-menu show"]',
    dropdownOptionThree: '//div[@id="test-3-div"]//a[text()="Option 3"]',
    testFourButtonGroup: '//div[@id="test-4-div"]//button',
    testFiveButton: '//button[@id="test5-button"]',
    testFiveAlert: '//div[@id="test5-alert"]',
    testSixTable: '//div[@id="test-6-div"]//table',
}

/*
 *  Method for Test 6 (return the value of any cell on the grid)
 *   table: the <table> element
 *   row: the x coordinate of the cell
 *   col: the y coordinate of the cell
 */
export async function getCellValue(table, row, col) {
    if (row >= 0 && row < 3 && col >= 0 && col < 3) {
        let result = await table.rows[row + 1].cells[col];
        return result.getAttribute("innerHTML");
    }
}

