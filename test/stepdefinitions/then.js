import { Then } from '@cucumber/cucumber';
import LandingPage from '../pageobjects/landing-page';

Then(/^I should see the message "([^"]*)" on the landing page$/, function (message) {
    LandingPage.getMessage().should.equal(message);
});