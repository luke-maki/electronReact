const { BrowserWindow, Menu } = require("electron");
const menu = require("../menus/mainMenu");

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
  mainWindow.loadURL("http://localhost:3000");

  // load view for browser window from build. UNCOMMENT before production
  // mainWindow.loadFile('../renderer/build/index.html');

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // garbage collection
    mainWindow = null;
  });
}

module.exports = { createWindow, mainWindow };
