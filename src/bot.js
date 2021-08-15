const { Telegraf } = require('telegraf');
require('dotenv').config();
const fetch = require('node-fetch');

const bot = new Telegraf(process.env.BOT_TOKEN);


const { getData, breeding, usdToCrypto, prices } = require('./service');

const primaryFunction = async (ctx) => {
    try{
        const resp = await getData(ctx.update.message.text);
        ctx.reply(resp);
    }catch(e){
        ctx.reply(`C kgo compa :,vv`)
    };
}

bot.command('slp', async (ctx) => primaryFunction(ctx) );

bot.command('dot', async (ctx) => primaryFunction(ctx) );

bot.command('xlm', async (ctx) => primaryFunction(ctx) );

bot.command('axs', async (ctx) => primaryFunction(ctx) );

bot.command('btc', async (ctx) => primaryFunction(ctx) );

bot.command('eth', async (ctx) => primaryFunction(ctx) );

bot.command('vet', async (ctx) => primaryFunction(ctx) );

bot.command('btt', async (ctx) => primaryFunction(ctx) );

bot.command('ada', async (ctx) => primaryFunction(ctx) );

bot.command('bnb', async (ctx) => primaryFunction(ctx) );

bot.command('pvu', async (ctx) => primaryFunction(ctx) );

bot.command('trx', async (ctx) => primaryFunction(ctx) );

bot.command('doge', async (ctx) => primaryFunction(ctx) );

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

bot.command('myteam', async (ctx)=> {
    try{
        const messageArray = ctx.update.message.text.split(" ");
        if(messageArray.length == 2){
            const res = await fetch(`http://180.232.101.103:31337/_axiesPlease/0x${messageArray[1]}`);
            const json = await res.json()
            if(json.available_axies){
                for (let element of json.available_axies.results) {
                    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
                    ctx.replyWithPhoto({ url: element.image },{
                        caption:`Class: ${element.class} \nParts: \n${element.parts[2].type} : ${element.parts[2].name} - ${element.parts[3].type} : ${element.parts[3].name} \n${element.parts[4].type} : ${element.parts[4].name} - ${element.parts[5].type} : ${element.parts[5].name}`
                    });
                 }
            }else{
                ctx.reply("Comando invalido");
            }
        }else{
            ctx.reply("Comando invalido");

        }
        
    }catch(e){
        ctx.reply("Comando invalido");
    }
});

bot.command('earnings', async (ctx)=> {
    try{
        const messageArray = ctx.update.message.text.split(" ");
        if(messageArray.length == 2){
            const res = await fetch(`http://180.232.101.103:31337/_schoEarnings/0x${messageArray[1]}`);
            const json = await res.json();
            if(json.success){
                const data = json.earnings;
                ctx.reply(`Current Balance: ${data.slp_holdings} \nSLP Unclaimed: ${data.slp_inventory}\nLifetime SLP Claimed: ${data.overall_farmed_slp}`);
            }else{
                ctx.reply("Comando invalido");
            }
        }else{
            ctx.reply("Comando invalido");

        }
        
    }catch(e){
        ctx.reply("Comando invalido");
    }
});

module.exports = bot;