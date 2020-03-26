 
 // Express to Criate the Server
 const express = require('express');
 const server =  express()

//Fix statics files (CSS, SCRIPTS and IMAGENS)
server.use(express.static('public'))


// The Router to get the HTML
 server.get('/', function(req, res) {
    return res.sendFile(__dirname + '/index.html')
 })

 server.get('/theorys', function(req, res) {
    return res.sendFile(__dirname + '/theorys.html')
 })


 // Server Door
 server.listen(3000)