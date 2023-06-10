import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  //Login link
  const loginURL = "https://en.wikipedia.org/wiki/Earth";
  await page.goto(loginURL);

  const [response] = await Promise.all([
    page.waitForNavigation(),
    page.click(".mw-disambig"),
  ]);
  const [response2] = await Promise.all([
    page.waitForNavigation(),
    page.click(".mw-logo"),
  ]);
})();
