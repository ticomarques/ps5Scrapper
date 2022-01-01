const puppeteer = require('puppeteer');

scrapeProduct = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    console.log(page);


}

scrapeProduct('https://www.walmart.com/ip/Sony-PlayStation-5-Digital-Edition-Video-Game-Consoles/987823383')

