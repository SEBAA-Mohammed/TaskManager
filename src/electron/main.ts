import {app , BrowserWindow, ipcMain} from 'electron'
import path from 'path'
import { isDev } from './util.js';
import { pollResources } from './resourceManager.js';
import { getStaticData } from './resourceManager.js';
import { getPreloadPath } from './pathResolver.js';


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
    win.loadFile(path.join(app.getAppPath() , 'dist-react/index.html'))
}
 pollResources(win);
  ipcMain.handle('getStaticData', () => {
    return getStaticData();
  });
});