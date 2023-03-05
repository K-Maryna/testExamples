exports.BPage = class BPage {

    constructor(page) {
        this.page = page;
        this.subCategory = page.locator("xpath=//a[@class='b-textlink b-textlink--parent']").nth(0);
    }

    async waitForBPageLoaded() {
        await this.page.waitForLoadState();
    }
}
