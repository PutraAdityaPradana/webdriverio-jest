import MotorPage from '../pageobjects/motor.page';

describe('motorcycle Page', () => {
    before(() => {
        MotorPage.open();
    });    

    it('should show the banner container', () => {
        expect(MotorPage.PromoBanner).toBeDisplayed();
    });

    it('navigate to new url', () => {
        MotorPage.PromoBanner.click();
         
        browser.url('https://www.bukalapak.com/promo-campaign/flash-diskon?from=category&section=banner_hero')
        expect(browser).toHaveUrl(
            'https://www.bukalapak.com/promo-campaign/flash-diskon?from=category&section=banner_hero'
        );
        browser.waitUntil (
            function() {
                return MotorPage.NavbarPromo.getText() === "Flash Diskon"
            });
        console.log(browser.getUrl());
    });
});