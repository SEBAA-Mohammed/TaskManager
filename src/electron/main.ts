import {app , BrowserWindow} from 'electron'
import path from 'path'
import { isDev } from './util.js';
import { pollResources } from './resourceManager.js';

app.on('ready', () => {
    const win = new BrowserWindow({
      title:"Task Manager",
      
    })
    if (isDev()) {
        win.loadURL('http://localhost:3000');
      } else {
    win.loadFile(path.join(app.getAppPath() , 'dist-react/index.html'))
}
pollResources();
});