require('hazardous');

const { BrowserWindow, app } = require("electron")
const pie = require("puppeteer-in-electron")
const puppeteer = require("puppeteer-core");

let window;
let browserPromise = pie.connect(app, puppeteer)

const main = async (browserPromise) => {

  console.log('launching window');
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  window.browser = await browserPromise;

  window.loadFile(__dirname + '/renderer/index.html');

  window.on('closed', () => {
    window = null
  })
};

app.on('ready', () => {
  main(browserPromise)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})