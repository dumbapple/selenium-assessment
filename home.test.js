import {By, Builder, Browser, until} from 'selenium-webdriver';
import assert from 'node:assert';
import { after, before, it } from "node:test";
import { locators, getCellValue } from "./HomePage.js";

describe('QA Engineer Assessment', () => {

    let browser;

    before(async () => {
        browser =  await new Builder().forBrowser(Browser.CHROME).build();

    })

    after(async () => await browser.quit());



    describe('Test 1', async () => {

        it('navigates to the homepage', async () => {
            await browser.get('C:\\Users\\andre\\WebstormProjects\\selenium-assessment\\index.html');
            await browser.wait(until.elementLocated(By.xpath(locators.navBarTitle)));
            let title = await browser.getTitle();
            assert.equal(title, "Home");
        });
    
        it('checks if email/password inputs and login button is present', async () => {
            await browser.wait(until.elementLocated(By.xpath(locators.emailInput)));
            await browser.wait(until.elementIsVisible(browser.findElement(By.xpath(locators.emailInput))));
            await browser.wait(until.elementLocated(By.xpath(locators.passwordInput)));
            await browser.wait(until.elementIsVisible(browser.findElement(By.xpath(locators.passwordInput))));
            await browser.wait(until.elementLocated(By.xpath(locators.loginButton)));
            await browser.wait(until.elementIsVisible(browser.findElement(By.xpath(locators.loginButton))));
        });

        it('enters an email and password combination into the respective fields', async () => {
            await browser.findElement(By.xpath(locators.emailInput)).sendKeys('some_fake_email@mailinator.com');
            await browser.findElement(By.xpath(locators.passwordInput)).sendKeys('testpassword123!');
        })

    });

    describe('Test 2', async () => {

        it('navigates to the homepage', async () => {
            await browser.get('C:\\Users\\andre\\WebstormProjects\\selenium-assessment\\index.html');
            await browser.wait(until.elementLocated(By.xpath(locators.navBarTitle)));
            let title = await browser.getTitle();
            assert.equal(title, "Home");
        });

        describe('Verify details about second list item', async () => {
            let listItems = await browser.findElements(By.xpath(locators.unorderedListGroup));

            it('asserts there are 3 listgroup values within the Test 2 div', async () => {
                assert.equal(listItems.length, 3);
            });

            it('asserts that the value of the second list item is set to "List Item 2"', async () => {
                assert.equal(listItems[1].getAttribute('innerText'), "List Item 2");
            });

            it('asserts that the badge value of the second list item is 6', async () => {
                let badgeValue = await browser.findElement(By.xpath(locators.secondBadge)).getAttribute('innerText');
                assert.equal(badgeValue, '6');
            });
        });
    
    });

    describe('Test 3', async () => {
        
        it('navigates to the homepage', async () => {
            await browser.get('C:\\Users\\andre\\WebstormProjects\\selenium-assessment\\index.html');
            await browser.wait(until.elementLocated(By.xpath(locators.navBarTitle)));
            let title = await browser.getTitle();
            assert.equal(title, "Home");
        });
    
        it('asserts that "Option 1" is the default selected value in the test 3 div, ', async () => {
            await browser.wait(until.elementLocated(By.xpath(locators.dropdownMenuButton)));
            let defaultValue = await browser.findElement(By.xpath(locators.dropdownMenuButton)).getAttribute("innerText");
            assert.equal(defaultValue, "Option 1 ");

        });

        it('selects "Option 3" from the select list', async () => {
            await browser.findElement(By.xpath(locators.dropdownMenuButton)).click();
            await browser.wait(until.elementIsVisible(browser.findElement(By.xpath(locators.dropdownMenuList))));
            await browser.findElement(By.xpath(locators.dropdownOptionThree)).click();
            let newValue = await browser.findElement(By.xpath(locators.dropdownMenuButton)).getAttribute("innerText");
            assert.equal(newValue, "Option 3");
        })
    
    });

    describe('Test 4', async () => {

        it('navigates to the homepage', async () => {
            await browser.get('C:\\Users\\andre\\WebstormProjects\\selenium-assessment\\index.html');
            await browser.wait(until.elementLocated(By.xpath(locators.navBarTitle)));
            let title = await browser.getTitle();
            assert.equal(title, "Home");
        });

        it('asserts the first button in test 4 div is enabled, and the second button is disabled', async () => {
            await browser.wait(until.elementLocated(By.xpath(locators.testFourButtonGroup)));
            let buttons = await browser.findElements(By.xpath(locators.testFourButtonGroup));
            assert(await buttons[0].getAttribute("disabled") === null);
            assert(await buttons[1].getAttribute("disabled") !== null);
        });
    
    });

    describe('Test 5', async () => {

        it('navigates to the homepage', async () => {
            await browser.get('C:\\Users\\andre\\WebstormProjects\\selenium-assessment\\index.html');
            await browser.wait(until.elementLocated(By.xpath(locators.navBarTitle)));
            let title = await browser.getTitle();
            assert.equal(title, "Home");
        });

        it('waits for a button to be displayed in Test 5 div before clicking it', async () => {
            await browser.wait(until.elementIsVisible(browser.findElement(By.xpath(locators.testFiveButton))));
            await browser.findElement(By.xpath(locators.testFiveButton)).click();
        });
        
        it('asserts that a success messsage is displayed after clicking the button', async () => {
            await browser.wait(until.elementIsVisible(browser.findElement(By.xpath(locators.testFiveAlert))));
        });

        it('asserts that the button is now disabled', async () => {
            let button = await browser.findElement(By.xpath(locators.testFiveButton));
            assert(button.getAttribute("disabled") !== null);
        });
        
    });

    describe('Test 6', async () => {
        
        it('navigates to the homepage', async () => {
            await browser.get('C:\\Users\\andre\\WebstormProjects\\selenium-assessment\\index.html');
            await browser.wait(until.elementLocated(By.xpath(locators.navBarTitle)));
            let title = await browser.getTitle();
            assert.equal(title, "Home");
        });

        it('checks the cell value at (2,2) is Ventosanzap', async () => {
            await browser.wait(until.elementLocated(By.xpath(locators.testSixTable)));
            let table = await browser.findElement(By.xpath(locators.testSixTable));
            assert(await getCellValue(table,2, 2) === "Ventosanzap");
        });
        
    });

});



