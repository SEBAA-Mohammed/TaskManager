const electron = require('electron');


electron.contextBridge.exposeInMainWorld('electron', {
    //@ts-ignore

  subscribeStatistics: (callback) =>
    ipcOn('statistics', (stats) => {
      callback(stats);
    }),
  subscribeChangeView: (callback) =>
    ipcOn('changeView', (view) => {
      callback(view);
    }),
  getStaticData: () => ipcInvoke('getStaticData'),
  sendFrameAction: (payload) => ipcSend('sendFrameAction', payload),
} satisfies Window['electron']);

