const { test, expect } = require('@playwright/test');
const { SearchWidget } = require('./components/SearchWidget.js');
const { SchPage } = require('./pages/SchPage.js');
const { BPage } = require('./pages/BPage.js');

let searchWidget;

test.beforeEach(async ({ page }) => {
  await page.goto('');
});

test.describe('Search', () => {
  test('should search item', async ({ page }) => {
    searchWidget = new SearchWidget(page);
    const schPage = new SchPage(page);

    const searchString = 'table';

    await searchWidget.searchInput.type(searchString);

    await searchWidget.searchButton.click();

    await schPage.waitForSchPageLoaded();

    await expect(schPage.item).toContainText([searchString],{ ignoreCase: true } );
  });

  test('should search by selected category', async ({ page }) => {
    searchWidget = new SearchWidget(page);
    const bPage = new BPage(page);

    const searchOption = 'Art';
    const optionValue = '550';

    await searchWidget.categoriesDropdown.selectOption(optionValue);

    await searchWidget.searchButton.click();

    await bPage.waitForBPageLoaded();

    await expect(bPage.subCategory).toContainText(searchOption);
  });
});
