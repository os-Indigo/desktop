const { BrowserWindow, app } = require('electron')

let window

const createMainWindow = () => {
  const { screen } = require('electron')
  const w = screen.getAllDisplays()[0]

  window = new BrowserWindow({
    frame: false,
    resizable: false,
    width: w.size.width,
    height: w.size.width,
    x: w.bounds.x,
    y: 0,
    webPreferences: {
      nodeIntegration: true
    }
  })

  window.loadURL(`file://${__dirname}/views/index.html`)
}

app.on('ready', createMainWindow)