import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    defaultViewport: null,
  });
  const page = await browser.newPage();

  // Set viewport
  // await page.setViewport({
  //   witdh:
  // });
  //Login link
  const loginURL = "https://www.shop-lazza.com/login";
  await page.goto(loginURL);

  //Input userName and password
  const username = "4379844400";
  const password = "Rapidash16#";
  await page.type("#CustomerMobile", username);
  await page.type("#CustomerPassword", password);

  //setTimeout for log in
  setTimeout(async () => {
    //define loginBtn
    const btn = await page.waitForSelector("#btnlogin");
    await btn.click();
    await page.waitForNavigation();

    //Redirect to task
    const giftButton = await page.waitForSelector(".divBottomMenuMainButton");
    await giftButton.click();
    await page.waitForNavigation();
  }, 2000);

  //Start task after 2s
  setTimeout(async () => {
    let taskNumber = 0;
    while (taskNumber < 40) {
      taskNumber++;
      const startBtn = await page.waitForSelector("#Button1");
      await startBtn.click();
      await page.waitForNavigation();

      //submit order with timeout 1s
      setTimeout(async () => {
        const submitBtn = await page.waitForSelector("#buttonSubmitOrder");
        await submitBtn.click();
        await page.waitForNavigation();
      }, 1000);
    }
  }, 4000);
})();
