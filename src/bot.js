const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);


const { getData, breeding, usdToCrypto, prices } = require('./service');


bot.command('slp', async (ctx)=>{
    try{
        const resp = await getData(ctx.update.message.text);
        ctx.reply(resp);
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.command('axs', async (ctx)=>{
    try{
        const resp = await getData(ctx.update.message.text);
        ctx.reply(resp);
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.command('btc', async (ctx)=>{
    try{
        const resp = await getData(ctx.update.message.text);
        ctx.reply(resp);
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.command('eth', async (ctx)=>{
    try{
        const resp = await getData(ctx.update.message.text);
        ctx.reply(resp);
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.command('vet', async (ctx)=>{
    try{
        const resp = await getData(ctx.update.message.text);
        ctx.reply(resp);
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});


bot.command('btt', async (ctx)=>{
    try{
        const resp = await getData(ctx.update.message.text);
        ctx.reply(resp);
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.command('ada', async (ctx)=>{
    try{
        const resp = await getData(ctx.update.message.text);
        ctx.reply(resp);
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.command('bnb', async (ctx)=>{
    try{
        const resp = await getData(ctx.update.message.text);
        ctx.reply(resp);
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.command('prices',async (ctx)=> {
    try {
        const message = await prices();
        ctx.reply(message);
    } catch (error) {
        ctx.reply(`C kgo compa :,vv`);
    };
    
})

bot.command('usd', async (ctx)=> {
    try{
        const message = await usdToCrypto(ctx.update.message.text);
        ctx.reply(message);
    }catch(e){
        ctx.reply("Comando invalido");
    }
});


bot.command('breed', async (ctx)=> {
    try{
        const message = await breeding(ctx.update.message.text);
        ctx.reply(message);
    }catch(e){
        ctx.reply("Comando invalido");
    }
});

module.exports = bot;