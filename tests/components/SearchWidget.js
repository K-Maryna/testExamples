exports.SearchWidget = class SearchWidget {

    constructor(page) {
        this.searchInput = page.locator("//input[@id='gh-ac']");
        this.searchButton = page.locator("//input[@id='gh-btn']");
        this.categoriesDropdown = page.locator("//select[@id='gh-cat']");
    }
}
