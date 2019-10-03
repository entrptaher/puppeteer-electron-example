const Crawler = require('./Chrome');

module.exports = async (newUrl) => {
  const crawler = await new Crawler();
  const { page } = crawler;

  await page.goto(newUrl);
  const title = await page.content();
  await crawler.close();

  return title;
}