const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.use(cors());                    

// Ez a rész az adatbázist kapcsolja össze a szerverrel
const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    port: 3307,
    password: "",
    database: "fogado",
}); 

// Teszt hogy össze van e kötve a szerver az adatbázissal
app.get("/", (req, res) => {
    res.send("fut");
})

//lekérdezéshez használtam dbforge programot és utána kértem segítséget copilotól hogy a distinct mit jelent és hogyan kell használni illetve a 2. lekérdezést egészítse ki.
//Ennél a feladatnál copilotot használtam arra hogy megtudjam mi az a DISTINCT ami azért felel hogy ne ismétlődjenek a nevek
//ez egy Api (lekéredezés) a feladatból const sql után kell be írni a lekérdezést
// A hét törpe fogadó feladat rész lekéredzése
app.get("/hettorpefogado", (req, res) => {
    const sql = "SELECT DISTINCT sznev, agy FROM foglalasok INNER JOIN szobak ON foglalasok.szoba = szobak.szazon INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz;";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})  

//Ennél a feladatnál copilotot használtam arra hogy megtudjam mi az a DATEDIFF ami a datumot számolja ki az érkezés és a távozás között hány nap telt el date a dátum a difference a különbség.
// Sum össze adja a föket és a datediff eredményt is
app.get("/szobakkihasznaltsaga", (req, res) => {
    const sql = " SELECT sznev, SUM(fo) AS osszes_vendeg, SUM(DATEDIFF(tav, erk)) AS osszes_ott_toltott_ejszaka FROM foglalasok INNER JOIN szobak ON foglalasok.szoba = szobak.szazon INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz GROUP BY sznev;";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})  

//utolso lekérdezest nem tudom megcsinálni de minden szobának van egy azonositoja ami és volt a régiok feladat ahol a változoként kellet be írni az azonositot csak nem tudom annak a szintaktikáját hogyan kell megcsinálni.

app.listen(3001, () => {
    console.log("Server is running on port 3001");
   });