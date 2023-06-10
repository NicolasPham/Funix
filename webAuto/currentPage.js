import puppeteer from "puppeteer";

(async () => {
  const wsChromeEndPointurl =
    "ws://127.0.0.1:9222/devtools/browser/28803f1c-2d2f-4e07-a8d7-1485c8fe6a99";
  const browser = await puppeteer.connect({
    browserWSEndpoint: wsChromeEndPointurl,
    defaultViewport: null,
  });
  const pages = await browser.pages();
  let page = pages[0];

  // await page.goto("https://www.shop-lazza.com/customer/cust-dashboard");

  //Start task
  setTimeout(async () => {
    const giftButton = await page.waitForSelector(".divBottomMenuMainButton");
    await giftButton.click();
    await page.waitForNavigation();
  }, 2000);

  setTimeout(async () => {
    let taskNumber = 0;
    while (taskNumber < 40) {
      taskNumber++;
      const startBtn = await page.waitForSelector("#Button1");
      await startBtn.click();
      await page.waitForNavigation();

      //submit order
      const submitBtn = await page.waitForSelector("#buttonSubmitOrder");
      await submitBtn.click();
      await page.waitForNavigation();
    }
  }, 4000);
})();

//ws://127.0.0.1:9222/devtools/browser/28803f1c-2d2f-4e07-a8d7-1485c8fe6a99
