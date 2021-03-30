const data = require('../../utils/data');
const commonPage = require('../../pageobjects/commonPage');
const millonMore = require('../../pageobjects/millionMore.page');

describe('verify all the links in the webpage', () => {

    before(() => {
        browser.url(data.url);
        browser.maximizeWindow();
        millonMore.btnAcceptCookies.click();
    });

    it('finding all the links and verify its response', () => {
        const urls = millonMore.getUrls(millonMore.homepageURLS);
        commonPage.btnCars.waitForClickable();
        commonPage.btnCars.click();
        urls.push(millonMore.getUrls(commonPage.carUrls));
        commonPage.btnCars.nextElement().click();
        urls.push(commonPage.getUrlFromSideNav());
        console.log("urls..............", urls)
        const allURLS = new Set(urls.flat(2));
        console.log("all URLS.....", allURLS)
        millonMore.verifyAllUrls(allURLS);
    })
})