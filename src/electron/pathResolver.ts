import path from 'path';
import { app } from 'electron';
import { isDev } from './util.js';

export function getPreloadPath() {
  return path.join(
    app.getAppPath(),
    isDev() ? '.' : '..',
    '/preload.cjs'
  );
}



export function getUIPath() {
    return path.join(app.getAppPath(), '/dist-react/index.html');
}
import { fileURLToPath } from 'url';

// Manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export function getAssetPath() {
    // Determine the base path depending on the environment
    const basePath = app.isPackaged
        ? path.join(process.resourcesPath, 'assets') // For production: resources/assets
        : path.join(__dirname, '..', 'src', 'assets'); // For development: src/assets
    return basePath;
}
