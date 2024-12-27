import {app , BrowserWindow, ipcMain} from 'electron'
// import path from 'path'
import { isDev } from './util.js';
import { pollResources } from './resourceManager.js';
import { getStaticData } from './resourceManager.js';
import { getPreloadPath, getUIPath } from './pathResolver.js';
import { createTray } from './tray.js';
import { createMenu } from './menu.js';


app.on('ready', () => {
    const win = new BrowserWindow({
      title:"Task Manager",
      webPreferences: {
        preload: getPreloadPath(),
      },
      
    })
    if (isDev()) {
        win.loadURL('http://localhost:3000');
      } else {
    win.loadFile(getUIPath())
}
 pollResources(win);
  ipcMain.handle('getStaticData', () => {
    return getStaticData();
  });
  createTray(win);
  handleCloseEvents(win);
  createMenu(win);
});


function handleCloseEvents(mainWindow: BrowserWindow) {
  let willClose = false;

  mainWindow.on('close', (e) => {
    if (willClose) {
      return;
    }
    e.preventDefault();
    mainWindow.hide();
    if (app.dock) {
      app.dock.hide();
    }
  });

  app.on('before-quit', () => {
    willClose = true;
  });

  mainWindow.on('show', () => {
    willClose = false;
  });
}