 
 // Express to Criate the Server
 const express = require('express');
 const server =  express()

 const db = require('./db')


/*
const theorys = [
    {
        img:'./img/naruto.png',
        title:'Naruto creator talks about character death in Boruto.',
        category:'Animes - Naruto',
        description:"Since Boruto's last episode: the fans have been a little terrified of one particular ninja.",
        url:'',
    },

    {
        img:'./img/spiderman.png',
        title:'Spider-Man suggests that Iron Man created a spider that bit Peter.',
        category:'Marvel - Spider-Man',
        description:'Robert Downey Jr como Tony Stark e Tom Holland como Peter Parker em cena de Homem-Aranha: De Volta ao Lar.',
        url:'',
    },

    {
        img:'./img/batman.png',
        title:"Relationship between Joaquin Phoenix's Joker and Robert Pattinson's Batman.",
        category:'DC - Batman',
        description:'From a possible indication by Robert Pattinson, a fan elaborated the theory.',
        url:'',
    },

    {
        img:'./img/pokemon.png',
        title:'Pokémon are also used as food by humans.',
        category:'Animes - Pokémon',
        description:'According to CBR, an episode of the first generation of the Pokémon anime reveals the inconvenient truth.',
        url:'',
    },

]
*/


//Fix statics files (CSS, SCRIPTS and IMAGENS)
server.use(express.static('public'))

//Fix express to use req.body from Post method
server.use(express.urlencoded({extended:true}))

//nunjucks config
const nunjucks = require('nunjucks')
nunjucks.configure('views', {
    express: server,
    noCache: true,
})

        // The Router to get the HTML
server.get('/', function(req, res) {

                //SHOW TABLES by DB.js

            db.all(`SELECT * FROM theories`, function(err, rows) {
                if (err) {
                    console.log(err)
                    return res.send('Sorry About That, But we had a problem with us Database!')
                }

                const reverseTheorys = [...rows].reverse()

                let lastTheorys = []
                for (let theory of reverseTheorys) {
                    if(lastTheorys.length < 3) {
                        lastTheorys.push(theory)
                    }
                }

                return res.render('index.html', { theorys: lastTheorys })
            })
        
})

server.get('/theorys', function(req, res) {


    db.all(`SELECT * FROM theories`, function(err, rows) {
        if (err) {
            console.log(err)
            return res.send('Sorry About That, But we had a problem with us Database!')
        }

        const reverseTheorys = [...rows].reverse()

        return res.render('theorys.html', {theorys: reverseTheorys})

    })

    
 })

server.post('/', function(req, res){
//INSERT DATA TO TABLE

const query = `
    INSERT INTO theories (
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `
const values = [
    req.body.image,
    req.body.title,
    req.body.category,
    req.body.description,
    req.body.link

]

db.run(query, values, function(err) {
    if (err) {
        console.log(err)
        return res.send('Sorry About That, But we had a problem with us Database!')
    }
    return res.redirect('/theorys')
})

})

 // Server Door
 server.listen(3000)