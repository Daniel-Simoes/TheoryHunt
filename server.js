 
 // Express to Criate the Server
 const express = require('express');
 const server =  express()

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

//Fix statics files (CSS, SCRIPTS and IMAGENS)
server.use(express.static('public'))


//nunjucks config
const nunjucks = require('nunjucks')
nunjucks.configure('views', {
    express: server,
    noCache: true,
})

// The Router to get the HTML
 server.get('/', function(req, res) {

    const reverseTheorys = [...theorys].reverse()

    let lastTheorys = []
    for (let theory of reverseTheorys) {
        if(lastTheorys.length < 3) {
            lastTheorys.push(theory)
        }
    }
    return res.render('index.html', { theorys: lastTheorys })
 })

 server.get('/theorys', function(req, res) {

    const reverseTheorys = [...theorys].reverse()

    return res.render('theorys.html', {theorys: reverseTheorys})
 })


 // Server Door
 server.listen(3000)