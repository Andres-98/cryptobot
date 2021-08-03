const express = require('express');
const path = require('path');
require('dotenv').config();

const bot = require('./src/bot');

const expressApp = express()

// Path público
const publicPath = path.resolve( __dirname, 'public' );
expressApp.use( express.static( publicPath ) );


const port = process.env.PORT || 3000
expressApp.get('/', (req, res) => {
  res.send('Hello World!')
})

expressApp.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

bot.launch();

