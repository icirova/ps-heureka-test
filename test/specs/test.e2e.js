const HeurekaHomePage = require('../pages/HeurekaHomePage');
const SearchResultsPage = require('../pages/SearchResultsPage');
// const PriceOverviewPage = require('../pages/PriceOverviewPage');

describe('Heureka product search', () => {
    it('should search for PS 5, compare the price and buy product', async () => {

        //
        await HeurekaHomePage.open();
        await HeurekaHomePage.acceptCookies();
        await HeurekaHomePage.searchFor('PlayStation 5 Pro');

        // const searchResultsHeader = await $('[data-testid="category-header-heading"]');
        // await expect(searchResultsHeader).toContain('PlayStation 5 Pro');

        //

        await SearchResultsPage.clickFirstResult();
        


    })
})

