'use strict'
const express = require('express');
const app = express();

const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors());
app.use(express.json());

require('dotenv').config()
const { addToFavorite, getFavorites, updateFavorites, delFavorite } = require('./Controller/Favoraite.controller')
const PORT = process.env.PORT;
const DB_URL = process.env.DB_CON
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    console.log('connected')
).catch(err =>
    console.log(err))

app.get('/', (req, res) => res.send('<h1>Welcom 😀</h1>'))
app.post('/addToFavorite', addToFavorite)
app.get('/getFavorites', getFavorites)
app.delete('/delFavorite/:id', delFavorite)
app.put('/updateFavorites/:id', updateFavorites)


app.listen(PORT, () => console.log('app listen on port :' + PORT))