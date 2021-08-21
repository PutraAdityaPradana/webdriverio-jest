import { When } from '@cucumber/cucumber';
import loginPage from '../pageobjects/login';

When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
});
