const CoinGecko = require('coingecko-api');
const { Telegraf } = require('telegraf');
require('dotenv').config();

const CoinGeckoClient = new CoinGecko();
const bot = new Telegraf(process.env.BOT_TOKEN);

const { isNumeric, costBreeding, symbols } = require('./helpers');


bot.hashtag('slp', async (ctx)=>{
    try{
        
        const resp = await CoinGeckoClient.simple.price({
            ids: ["smooth-love-potion"],
            vs_currencies: ['eur', 'usd']
        });
        const { data } = resp;
        const message = ctx.update.message.text;
        const messageArray = message.split(" ");
        if (messageArray.length > 1){
            if(isNumeric(messageArray[1])){
                ctx.reply(`${messageArray[1]} SLP = ${messageArray[1]*data["smooth-love-potion"].usd} USD`);
            }else{
                ctx.reply("Comando invalido");
            }
        }else{
            ctx.reply(
                `Price of SLP: \n${data["smooth-love-potion"].usd} USD \n${data["smooth-love-potion"].eur} EUR`
                );
        }
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.hashtag('axs', async (ctx)=>{
    try{
        const resp = await CoinGeckoClient.simple.price({
            ids: ["axie-infinity"],
            vs_currencies: ['eur', 'usd']
        });
        const { data } = resp;
        const message = ctx.update.message.text;
        const messageArray = message.split(" ");
        if (messageArray.length > 1){
            if(isNumeric(messageArray[1])){
                ctx.reply(`${messageArray[1]} AXS = ${messageArray[1]*data["axie-infinity"].usd} USD`);
            }else{
                ctx.reply("Comando invalido");
            }
        }else{
            ctx.reply(
                `Price of AXS: \n${data["axie-infinity"].usd} USD \n${data["axie-infinity"].eur} EUR`
                );
        }
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.hashtag('btc', async (ctx)=>{
    try{
        
        const resp = await CoinGeckoClient.simple.price({
            ids: ["bitcoin"],
            vs_currencies: ['eur', 'usd']
        });
        const { data } = resp;
        const message = ctx.update.message.text;
        const messageArray = message.split(" ");
        if (messageArray.length > 1){
            if(isNumeric(messageArray[1])){
                ctx.reply(`${messageArray[1]} BTC = ${messageArray[1]*data.bitcoin.usd} USD`);
            }else{
                ctx.reply("Comando invalido");
            }
        }else{
            ctx.reply(
                `Price of BTC: \n${data.bitcoin.usd} USD \n${data.bitcoin.eur} EUR`
                );
        }
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.hashtag('eth', async (ctx)=>{
    try{
        
        const resp = await CoinGeckoClient.simple.price({
            ids: ["ethereum"],
            vs_currencies: ['eur', 'usd']
        });
        const { data } = resp;
        const message = ctx.update.message.text;
        const messageArray = message.split(" ");
        if (messageArray.length > 1){
            if(isNumeric(messageArray[1])){
                ctx.reply(`${messageArray[1]} ETH = ${messageArray[1]*data.ethereum.usd} USD`);
            }else{
                ctx.reply("Comando invalido");
            }
        }else{
            ctx.reply(
                `Price of ETH: \n${data.ethereum.usd} USD \n${data.ethereum.eur} EUR`
                );
        }
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.hashtag('vet', async (ctx)=>{
    try{
        
        const resp = await CoinGeckoClient.simple.price({
            ids: ["vechain"],
            vs_currencies: ['eur', 'usd']
        });
        const { data } = resp;
        const message = ctx.update.message.text;
        const messageArray = message.split(" ");
        if (messageArray.length > 1){
            if(isNumeric(messageArray[1])){
                ctx.reply(`${messageArray[1]} BTC = ${messageArray[1]*data['vechain'].usd} USD`);
            }else{
                ctx.reply("Comando invalido");
            }
        }else{
            ctx.reply(
                `Price of VET: \n${data['vechain'].usd} USD \n${data['vechain'].eur} EUR`
                );
        }
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});


bot.hashtag('btt', async (ctx)=>{
    try{
        
        const resp = await CoinGeckoClient.simple.price({
            ids: ["bittorrent"],
            vs_currencies: ['eur', 'usd']
        });
        const { data } = resp;
        const message = ctx.update.message.text;
        const messageArray = message.split(" ");
        if (messageArray.length > 1){
            if(isNumeric(messageArray[1])){
                ctx.reply(`${messageArray[1]} BTT = ${messageArray[1]*data['bittorrent'].usd} USD`);
            }else{
                ctx.reply("Comando invalido");
            }
        }else{
            ctx.reply(
                `Price of BTT: \n${data['bittorrent'].usd} USD \n${data['bittorrent'].eur} EUR`
                );
        }
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.hashtag('ada', async (ctx)=>{
    try{
        
        const resp = await CoinGeckoClient.simple.price({
            ids: ["cardano"],
            vs_currencies: ['eur', 'usd']
        });
        const { data } = resp;
        const message = ctx.update.message.text;
        const messageArray = message.split(" ");
        if (messageArray.length > 1){
            if(isNumeric(messageArray[1])){
                ctx.reply(`${messageArray[1]} ADA = ${messageArray[1]*data['cardano'].usd} USD`);
            }else{
                ctx.reply("Comando invalido");
            }
        }else{
            ctx.reply(
                `Price of ADA: \n${data['cardano'].usd} USD \n${data['cardano'].eur} EUR`
                );
        }
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.hashtag('bnb', async (ctx)=>{
    try{
        
        const resp = await CoinGeckoClient.simple.price({
            ids: ["binance-coin"],
            vs_currencies: ['eur', 'usd']
        });
        const { data } = resp;
        const message = ctx.update.message.text;
        const messageArray = message.split(" ");
        if (messageArray.length > 1){
            if(isNumeric(messageArray[1])){
                ctx.reply(`${messageArray[1]} BNB = ${messageArray[1]*data['binance-coin'].usd} USD`);
            }else{
                ctx.reply("Comando invalido");
            }
        }else{
            ctx.reply(
                `Price of BNB: \n${data['binance-coin'].usd} USD \n${data['binance-coin'].eur} EUR`
                );
        }
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
});

bot.command('prices',async (ctx)=> {
    
    const resp = await CoinGeckoClient.simple.price({
        ids: ["smooth-love-potion", "axie-infinity", "bitcoin", "ethereum"],
        vs_currencies: ['eur', 'usd'],
    });
    const { data } = resp;
    console.log(ctx.update.message.text);
    ctx.reply(
    `Price of SLP: \n${data["smooth-love-potion"].usd} USD \n${data["smooth-love-potion"].eur} EUR 
    \nPrice of AXS: \n${data["axie-infinity"].usd} USD \n${data["axie-infinity"].eur} EUR
    \nPrice of BTC: \n${data.bitcoin.usd} USD \n${data.bitcoin.eur} EUR
    \nPrice of ETH: \n${data.ethereum.usd} USD \n${data.ethereum.eur} EUR`
        );
    
})

bot.command('usd', async (ctx)=> {
    try{
        const message = ctx.update.message.text;
        const messageArray = message.split(" ");
        if (messageArray.length > 2){
            const valOne = messageArray[1];
            const symbol = messageArray[2].toLocaleLowerCase();
            const currency = symbols[symbol];
            if(isNumeric(valOne) && currency){
                const resp = await CoinGeckoClient.simple.price({
                    ids: currency,
                    vs_currencies: ['usd'],
                });
                const { data } = resp;
                ctx.reply(`${valOne} USD = ${valOne/data[currency].usd} ${symbol.toUpperCase()}`);
            }else{
                ctx.reply("Comando invalido");
            }
        }
    }catch(e){
        ctx.reply("Comando invalido");
    }
});


bot.command('breed', async (ctx)=> {
    try{
        const message = ctx.update.message.text;
        const messageArray = message.split(" ");
        if (messageArray.length > 2){
            const valOne = messageArray[1];
            const valTwo = messageArray[2];
            if(isNumeric(valOne) && valOne >= 0 && valOne < 7 
                && isNumeric(valTwo) && valTwo >= 0 && valTwo < 7){
                const resp = await CoinGeckoClient.simple.price({
                    ids: ["smooth-love-potion", "axie-infinity"],
                    vs_currencies: ['usd'],
                });
                const { data } = resp;
                ctx.reply(`
                ${(costBreeding[valOne] + costBreeding[valTwo])
                    * data["smooth-love-potion"].usd
                    + 4*data["axie-infinity"].usd} USD`);
            }else{
                ctx.reply("Comando invalido");
            }
        }
    }catch(e){
        ctx.reply("Comando invalido");
    }
});

module.exports = bot;