class HeurekaHomePage {

    //selektory
    get searchInput() {
        return $('.c-search__input');
    }

    get searchButton() {
        return $('.c-search__button');
    }

    //metody
    async open() {
        await browser.url('https://www.heureka.cz');
    }

    async searchFor(productName) {
        await this.searchInput.setValue(productName.toLowerCase());
        await this.searchButton.click();
    }



}

module.exports = new HeurekaHomePage();
