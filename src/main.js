var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var os = require('os');


// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {

  // Create the browser window.
  var atomScreen = require('screen');
  var size = atomScreen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({ width: size.width, height: size.height });

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/../static/index.html');

  mainWindow.webContents.on('did-finish-load', function() {
    var wd = process.argv[1];
  });

  // Open the devtools.
  // mainWindow.openDevTools();


  // TODO: check for updates (i think i need to codesign?)
  // var autoUpdater = require('auto-updater');
  // var platform = os.platform() + '_' + os.arch();
  // var version = app.getVersion();
  // var updateUrl = 'https://rodeo-nuts.herokuapp.com/update/' + 'osx_64' + '/' + version;
  // autoUpdater.setFeedUrl(updateUrl);


  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
