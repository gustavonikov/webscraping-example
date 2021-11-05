const puppeteer = require('puppeteer');

/**
 * Web scraping procedure using puppeteer functionalities.
 */
(async () => {
    const browser = await puppeteer.launch({
        headless: false, // Only opens the browser with this option set to false. If you dont want to see the browser set it true.
        defaultViewport: {
            width: 1440,
            height: 900
        }
    })

    const page = await browser.newPage()

    await page.goto('https://webscraper.io/test-sites', { waitUntil: 'load' })

    // Capture any console log emitted on the page, its here just 4fun.
    page.on('console', (msg) => {
        for (let i = 0; i < msg.args().length; ++i)
            console.log(`${i}: ${msg.args()[i]}`);
    });

    // Sending a console log to the site soon as it loads.
    await page.evaluate(() => console.log(' Hey, good luck with your web scraping!'))

    /* 
        Evaluate allows you to navigate as if you are in the browser yourself. 
        You can use this to manipulate the DOM or how its being used in the rest of the code.
        Both will generate the same result, but I found faster using evaluate in some cases. 
    */
    await page.evaluate(() => {
        try {
            const simpleEcommerceSite = document.querySelector('a[href="/test-sites/e-commerce/allinone"]')
            simpleEcommerceSite && simpleEcommerceSite.click()

        } catch (error) {
            throw new Error ('Something went wrong! The section was not found.')
        }
    })

    // You can use this to wait any navigation made. In this case by the link that we clicked.
    await page.waitForNavigation()

    const computersSection = await page.$('a[href="/test-sites/e-commerce/allinone/computers"]')

    computersSection.click()

    // Or You can wait directly for the selector that you want to manipulate.
    const laptopsSection = await page
        .waitForSelector('a[href="/test-sites/e-commerce/allinone/computers/laptops"]', {
            visible: true,
            timeout: 10000
        })

    laptopsSection.click()

    const laptop = await page.waitForSelector('a[title="Asus VivoBook X441NA-GA190"]', {
        visible: true,
        timeout: 10000
    })

    try {
        const laptopParentEl = await laptop.getProperty('parentElement')
        const laptopPriceEl = await laptopParentEl.getProperty('previousElementSibling')
        const laptopPriceText = await laptopPriceEl.getProperty('innerText')

        const laptopPrice = laptopPriceText._remoteObject.value

        console.log(`The price of laptop Asus VivoBook X441NA-GA190 is ${laptopPrice}`)
    } catch (error) {
        throw new Error (`Ocorreu um erro ao tentar obter o preço: \n ${error.message}`)
    }
   
    // Make your script wait if you want to.
    await page.waitForTimeout(2000)

    // Close the browse and end the script.
    browser.close()
})()
