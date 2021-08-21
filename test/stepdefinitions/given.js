import { Given } from '@cucumber/cucumber';
import { Then } from '@cucumber/cucumber';
import loginPage from '../pageobjects/login';


Given('I am on the herokuapp login page', function () {
    loginPage.open();     // navigating to login page
  });


