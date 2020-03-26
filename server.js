 
 // Express to Criate the Server
 const express = require('express');
 const server =  express()

//Fix statics files (CSS, SCRIPTS and IMAGENS)
server.use(express.static('public'))


//nunjucks config
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    express: server,
})

// The Router to get the HTML
 server.get('/', function(req, res) {
    return res.render('index.html')
 })

 server.get('/theorys', function(req, res) {
    return res.render('theorys.html')
 })


 // Server Door
 server.listen(3000)