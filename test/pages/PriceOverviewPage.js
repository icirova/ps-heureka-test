class PriceOverviewPage {
    //selektory
    get buyButton() {
        return $('[data-testid="Top Offer Buy Button"]')
    }

    //metody
    async buyProduct() {
        this.buyButton.click()
    }
}

module.exports = new PriceOverviewPage();