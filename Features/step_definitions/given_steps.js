const driver = require('taiko');
const { Given, Then, When, And, But , setDefaultTimeout} = require('cucumber');
var randomWords = require('random-words');
var Chance = require('chance');
var chance = new Chance();
var my_random_string = chance.string();


setDefaultTimeout(60*1000);
// Uncomment the appropriate line to run headless
Given(/^I have entered search on Google$/, async function ()
{
    await driver.openBrowser({headless: false});
    //await driver.openBrowser();
    await driver.goto('http://www.google.com');
    await driver.write(randomWords() + ' alcohol test', driver.into(driver.textField()));
    //await driver.write(my_random_string, driver.into(driver.textField()));
});


    Given(/^I feel lucky$/, async function () {
        await driver.click("I'm Feeling Lucky");
    });
