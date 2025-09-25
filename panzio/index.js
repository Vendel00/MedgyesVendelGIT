const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('FUT')
})

app.listen(port, () => {
    console.log('porton fut'+ {port})
})