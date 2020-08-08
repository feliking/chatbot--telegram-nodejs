const Telegraf = require('telegraf')

const bot = new Telegraf('1119079444:AAHQTm2lE4RBToCKFuuCg9uN84sE6oOxNlc')

bot.start((ctx) => {
    ctx.reply('Welcome');
})

bot.help((ctx) => {
    ctx.reply('Necesitas ayuda?');
})

bot.settings((ctx) => {
    ctx.reply('Aquí son las configuraciones');
})

// bot.command('mycommand', (ctx) => {
//     ctx.reply('my custom command!!!')
// })

bot.command(['mycommand', 'MYCOMMAND'], (ctx) => {
    ctx.reply('my custom command!!!')
})

bot.hears('computer', ctx => {
    ctx.reply('Hey I am selling computer')
})

// bot.on('text', ctx => {
//     ctx.reply('estas texteando')
// })

bot.on('sticker', ctx => {
    ctx.reply('oh you like stickers')
})

bot.mention('BotFather', (ctx) => {
    ctx.reply('You mentioned someone')
})

bot.phone('77777777', (ctx) => {
    ctx.reply('This is phone number')
})

bot.hashtag('programming', (ctx) => {
    ctx.reply('hashtag')
})

// Más eventos en la página oficial telegraf.js.org

bot.launch()