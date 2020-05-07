 const sqlite3 = require('sqlite3').verbose()
 const db = new sqlite3.Database('./theoryHuntWeb.db')

 db.serialize(function() {
     
    //CREATE TABLE

    db.run(`
        CREATE TABLE IF NOT EXISTS theories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)
 
    //INSERT DATA TO TABLE
/*
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

            './img/naruto.png',
            'Naruto creator talks about character death in Boruto.',
            'Animes - Naruto',
            "Since Boruto's last episode the fans have been a little terrified of one particular ninja.",
            'https://google.com'

        ]

        db.run(query, values, function(err) {
            if (err) return console.log(err)
            console.log(this)
        })


        //DELETE TABLE

        db.run(`DELETE FROM theories WHERE id  = ?`, [9], function(err) {
            if (err) return console.log(err)
    
            console.log("Deleted", this)
        })



    //SHOW TABLES

    db.all(`SELECT * FROM theories`, function(err, rows) {
        if (err) return console.log(err)

        console.log(rows)
    })

*/
 })

 module.exports = db