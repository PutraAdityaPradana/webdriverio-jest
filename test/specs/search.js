import SearchPage from '../pageobjects/search.page';

describe('Bukalapak product search', () => {

    it('should open the main url and verify the title', () => {
        SearchPage.open();
        expect(browser).toHaveTitle(
            'Situs Belanja Online dan Jual Beli Mudah Terpercaya | Bukalapak'
        );
    });

    it('search a product and verify the result', () => {
        SearchPage.searchInput.addValue('Masker Medis');
        SearchPage.searchBtn.click();

        expect(SearchPage.searchInput).toHaveValue('Masker Medis')
    });
})