console.log('main process working');
console.log('main.js');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");


let winone;

function createWindow() {
    winone = new BrowserWindow({
        webPreferences: {
            nodeIntegration:true,
            contextIsolation:false,
        }
    });

    winone.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    winone.webContents.openDevTools();

    winone.on('closed', () => {
        win = null;
    })
    
}


app.on('ready', createWindow);