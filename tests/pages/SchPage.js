exports.SchPage = class SchPage {

    constructor(page) {
        this.page = page;
        this.item = page.locator("xpath=(//span[@role='heading']) [position()>1]");
    }

    async waitForSchPageLoaded() {
        await this.page.waitForLoadState();
    }
}
