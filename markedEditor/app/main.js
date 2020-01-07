const {app, BrowserWindow} = require('electron')

let mainView = null

app.on('ready', () => {
    mainView = new BrowserWindow()
    mainView.loadFile('./app/index.html')

    mainView.on('closed', ()=>{
        mainView = null
    })
})