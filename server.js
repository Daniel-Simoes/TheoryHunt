 
 // Express to Criate the Server
 const express = require('express');
 const server =  express()


const theorys = [
    {
        img:'./img/naruto.png',
        title:'Criador de Naruto fala sobre morte de personagem em Boruto?',
        category:'Animes - Naruto',
        description:'Desde a estreia de Boruto: Naruto Next Generations, no mês passado, os fãs ficaram um pouco aterrorizados por um ninja em especial.',
        url:'',
    },

    {
        img:'./img/spiderman.png',
        title:'Homem-Aranha sugere que Homem de Ferro criou aranha que mordeu Peter',
        category:'Marvel - Homem Aranha',
        description:'Robert Downey Jr como Tony Stark e Tom Holland como Peter Parker em cena de Homem-Aranha: De Volta ao Lar.',
        url:'',
    },

    {
        img:'./img/batman.png',
        title:'Relação entre Coringa de Joaquin Phoenix e Batman de Robert Pattinson',
        category:'DC - Batman',
        description:'A partir de uma possível indicação de Robert Pattinson, fã elaborou a teoria. ',
        url:'',
    },

    {
        img:'./img/pokemon.png',
        title:'Os Pokémons também são usados como alimento pelos humanos!',
        category:'Animes - Pokémon',
        description:'De acordo com o CBR, um episódio da primeira geração do anime Pokémon revela a inconveniente verdade.',
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