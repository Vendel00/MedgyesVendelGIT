const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.use(cors());                    

// Adatbázis kapcsolat létrehozása
const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    port: 3307,
    password: "",
    database: "kozutak",
}); 

// Gyökér útvonal, tesztelésre
app.get("/", (req, res) => {
    res.send("Fut a backend!");
})


// Régiók listázása
app.get("/regiok", (req, res) => {
    const sql = "SELECT * FROM `regiok`";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})  


 
app.get("/regiok2", (req, res) => {
    const sql = "SELECT megyenev,regionev,hossz FROM kozutak_hossza INNER JOIN megyek ON kozutak_hossza.`Mid` = megyek.`Mid` INNER JOIN regiok ON kozutak_hossza.Rid = regiok.Rid";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})  

app.get("/regiok3", (req, res) => {
    const sql = "SELECT regionev, megyenev, datum FROM kozutak_hossza INNER JOIN megyek ON kozutak_hossza.`Mid` = megyek.`Mid` INNER JOIN regiok ON kozutak_hossza.Rid = regiok.Rid WHERE datum = 2017;";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})  

app.delete("/torles/:id", (req, res)=>{
    const sql = "DELETE FROM 'regiok' WHERE Rid = ?";
    db.query(sql, [req.params.id], (err, result) =>{
        if (err) return res.json(err);
        return res.json(result)
    })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
   });