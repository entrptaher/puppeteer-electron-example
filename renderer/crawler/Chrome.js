const electron = require("electron")
const pie = require("puppeteer-in-electron")
var currentWindow = electron.remote.getCurrentWindow();
const browser = currentWindow.browser;
const preload = require('./preload');

class Crawler {
  constructor() {
    this.window;
    this.page;
    return this.init(browser);
  }
  async close() {
    await this.page.close();
    await this.window.destroy();
  }
  async init() {
    this.window = new electron.remote.BrowserWindow({ show: false });
    this.page = await pie.getPage(browser, this.window);
    await this.page.evaluateOnNewDocument(preload);
    return this;
  }
}

module.exports = Crawler;