import Page from './page';

class SearchPage extends Page {
    get searchInput() {
        return $('#v-omnisearch__input');
    }

    get searchBtn() {
        return $('.v-omnisearch__submit-icon');
    }

    open() {
        super.open('https://www.bukalapak.com/');
    }
}

export default new SearchPage();