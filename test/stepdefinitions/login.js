import { Given,When,Then } from '@cucumber/cucumber';
import loginPage from '../pageobjects/login';
import LandingPage from '../pageobjects/landing-page';


Given('I am on the herokuapp login page', function () {
    loginPage.open();     // navigating to login page
  });

When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
});

Then(/^I should see the message "([^"]*)" on the landing page$/, function (message) {
    LandingPage.getMessage().should.equal(message);
});