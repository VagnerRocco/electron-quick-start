/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
var loki = require('lokijs')
var db = new loki('db.json')
var clientes = db.addCollection('clientes')
clientes.insert({
    nome: 'Vagner',
    email: 'gatunica'

})
db.save()