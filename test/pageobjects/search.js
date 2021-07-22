describe('Bukalapak product search', () => {
    it('should open the main url and verify the title', () => {
        browser.url('https://www.bukalapak.com/');
        expect(browser).toHaveTitle(
            'Situs Belanja Online dan Jual Beli Mudah Terpercaya | Bukalapak'
        );
    });

    it('search a product and verify the result', () => {
        const searchInput = $('#v-omnisearch__input');
        const searchBtn = $('.v-omnisearch__submit-icon');

        searchInput.addValue('Masker Medis');
        searchBtn.click();

        expect(searchInput).toHaveValue('Masker Medis')
    });
})