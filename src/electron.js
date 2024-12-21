const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800, 
    height: 600
  });
  win.loadFile('dist/electron-app/browser/index.html');  
}

app.whenReady().then(() => {
  createWindow()
})