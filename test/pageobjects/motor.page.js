import Page from './page';

class MotorPage extends Page {
    get PromoBanner() {
        return $('.category-main-banner');
    }

    get NavbarPromo() {
        return $("//p[contains(text(),  'Flash Diskon')]");
    }

    open() {
        super.open('https://www.bukalapak.com/c/motor-471?from=nav_header');
    }
}

export default new MotorPage();