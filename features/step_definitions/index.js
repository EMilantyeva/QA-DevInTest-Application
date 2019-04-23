const { Given, Then } = require('cucumber');
const World = require('../support/world');
const selectors = require('../selectors');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the '(.*)'$/, async element => World.driver.findElement(selectors[element]));
