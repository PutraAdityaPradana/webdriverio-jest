import { expect as chaiExpect } from 'chai';

describe('motorcycle Page', () => {

    it('should show the banner container', () => {
        browser.url(
            'https://www.bukalapak.com/c/motor-471?from=nav_header');
        const PromoBanner = $('.category-main-banner');
        expect(PromoBanner).toBeDisplayed();
    });

    it('navigate to new url', () => {
        const PromoBanner = $('.category-main-banner');
        PromoBanner.click();

        const url = browser.getUrl();
        chaiExpect(url).to.include('motor');
    });
});