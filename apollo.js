var app = require('app');
var ipc = require('ipc');
var unirest = require('unirest');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();
var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

ipc.on('authenticate', function(event, email, password) {
  unirest.post('http://127.0.0.1:8000/users/authenticate')
  .headers({ 'Accept': 'application/json' })
  .type('json')
  .send({'email': email, 'password': password})
  .end(function (response) {
    console.log(response);
    event.returnValue = 'logged...';
  });
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 400, height: 400});
  mainWindow.loadUrl('file://' + __dirname + '/apollo.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
