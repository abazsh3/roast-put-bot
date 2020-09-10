require('dotenv').config();
const { Telegraf } = require('telegraf')
const eol = require('os').EOL;


const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('text', (ctx) => {
    if (ctx.message.text==='/start'){

        ctx.reply("با این ربات میتونی پیام دلخواهت رو به ادمین کانال roast put ارسال کنی!" +
            "از این به بعد هر پیامی که بفرستی مستقیم به ادمین ارسال میشه! " , )
            .then(()=>ctx.telegram.sendMessage('-1001387393875','new user :'+eol+ctx.message.from.id+eol+ctx.message.from.first_name+eol+ctx.message.from.username))
            .catch(e=>ctx.telegram.sendMessage('-1001387393875','error:' +e))
    }
    else {
        ctx.telegram.forwardMessage(400838874,ctx.message.from.id,ctx.message.message_id)
            .then(()=>{
                ctx.telegram.forwardMessage('-1001387393875',ctx.message.from.id,ctx.message.message_id).catch(e=>console.log(e))
                ctx.telegram.forwardMessage(315648367,ctx.message.from.id,ctx.message.message_id).catch(e=>console.log(e))
                ctx.telegram.forwardMessage(99779769,ctx.message.from.id,ctx.message.message_id).catch(e=>console.log(e))
            })
            .catch(e=>ctx.telegram.sendMessage('-1001387393875','error:' +e))
    }

})
bot.launch()

