class HeurekaHomePage {

    //selektory
    get cookieAcceptButton() {
        return $('#didomi-notice-agree-button');
      }

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

    async acceptCookies() {
        if (await this.cookieAcceptButton.isDisplayed()) {
            await this.cookieAcceptButton.waitForClickable({ timeout: 5000 });
            await this.cookieAcceptButton.click();
        }
    }
    async searchFor(productName) {
        await this.searchInput.setValue(productName);
        await this.searchButton.click();
    }



}

module.exports = new HeurekaHomePage();
