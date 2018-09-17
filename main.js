// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron');
const menu = require('./menus/mainMenu');

// Set env to production. UNCOMMENT before production
// process.env.NODE_ENV = 'production';

// Initialize main window
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // Create the menu
  const mainWindowMenu = Menu.buildFromTemplate(menu);
  // Insert the menu
  Menu.setApplicationMenu(mainWindowMenu);

  // loads view from webpack dev server. DELETE before production
  mainWindow.loadURL('http://localhost:3000');

  // load view for browser window from build. UNCOMMENT before production
  // mainWindow.loadFile('./views/build/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // garbage collection
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
