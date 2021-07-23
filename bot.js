const express = require('express');
const { Telegraf } = require('telegraf')
const Binance = require('node-binance-api');
const binance = new Binance();
const path = require('path');
require('dotenv').config();

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

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hashtag('slp', async (ctx)=>{
    try{
        let ticker = await binance.prices('SLPUSDT');
        ctx.reply(`Price of SLP: ${ticker.SLPUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
});

bot.hashtag('axs', async (ctx)=>{
    try{
        let ticker = await binance.prices('AXSUSDT');
        ctx.reply(`Price of AXS: ${ticker.AXSUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
});
bot.hashtag('ada', async (ctx)=>{
    try{
        let ticker = await binance.prices('ADAUSDT');
        ctx.reply(`Price of ADA: ${ticker.ADAUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
});

bot.hashtag('btc', async (ctx)=>{
    try{
        let ticker = await binance.prices('BTCUSDT');
        ctx.reply(`Price of BTC: ${ticker.BTCUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
});

bot.hashtag('eth', async (ctx)=>{
    try{
        let ticker = await binance.prices('ETHUSDT');
        ctx.reply(`Price of ETH: ${ticker.ETHUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
});

bot.hashtag('btt', async (ctx)=>{
    try{
        let ticker = await binance.prices('BTTUSDT');
        ctx.reply(`Price of BTT: ${ticker.BTTUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
});

bot.hashtag('bnb', async (ctx)=>{
    try{
        let ticker = await binance.prices('BNBUSDT');
        ctx.reply(`Price of BTT: ${ticker.BNBUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
});

bot.hashtag('xlm', async (ctx)=>{
    try{
        let ticker = await binance.prices('XLMUSDT');
        ctx.reply(`Price of XLM: ${ticker.XLMUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
});

bot.hashtag('vet', async (ctx)=>{
    try{
        let ticker = await binance.prices('VETUSDT');
        ctx.reply(`Price of VET: ${ticker.VETUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
});

bot.command('cryptos',(ctx)=> {
    
    console.log(`${ctx.from.first_name} ha iniciado la aplicacion`)
    ctx.reply("Selecciona la opcion para ver el precio.",{
        reply_markup:{
            inline_keyboard:[
                [{text:"BTC",callback_data:"BTC"}],[{text:"ETH",callback_data:"ETH"}],
                [{text:"SLP",callback_data:"SLP"}],[{text:"AXS",callback_data:"AXS"}]
            ]
        }})
    
})
bot.action('ETH', async ctx => {
    try{
        let ticker = await binance.prices('ETHUSDT');
        ctx.reply(`Price of ETH: ${ticker.ETHUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
})
bot.action('BTC', async ctx => {
    try{
        let ticker = await binance.prices('BTCUSDT');
        ctx.reply(`Price of BTC: ${ticker.BTCUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
})

bot.action('SLP', async ctx => {
    try{
        let ticker = await binance.prices('SLPUSDT');
        ctx.reply(`Price of SLP: ${ticker.SLPUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
})
bot.action('AXS', async ctx => {
    try{
        let ticker = await binance.prices('AXSUSDT');
        ctx.reply(`Price of AXS: ${ticker.AXSUSDT} USDT`)
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    }
});

bot.launch();