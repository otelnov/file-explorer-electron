var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  

app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 660, height: 500});

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Open the DevTools.
  //mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});