 const express = require('express');

 const server =  express()

 server.get('/', function() {
    console.log('Server Working...')
 })

 server.listen(3000)