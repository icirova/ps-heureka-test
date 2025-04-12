class SearchResultsPage {

    //selektory
    get productCompareButton() {
        return $$('[data-testid="product-button"]')
    }


    //metody
    async clickFirstResult() {
        const results = await this.productCompareButton;
        if (results.length > 0) {
            await results[0].click();
        }
        else {
            throw new Error('No search results found');
        }
    }
}

module.exports = new SearchResultsPage();