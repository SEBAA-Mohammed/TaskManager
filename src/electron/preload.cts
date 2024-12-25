const electron = require('electron');


electron.contextBridge.exposeInMainWorld('electron', {
    //@ts-ignore

  subscribeStatistics: (callback) =>
    electron.ipcRenderer.on('statistics', (stats) => {
      callback(stats);
    }),
//   subscribeChangeView: (callback) =>
//     electron.ipcRenderer.on('changeView', (view) => {
//       callback(view);
//     }),
  getStaticData: () => electron.ipcRenderer.invoke("getStaticData"),
//   sendFrameAction: (payload) => ipcSend('sendFrameAction', payload),
}
//  satisfies Window['electron']
);
