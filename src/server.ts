import {
  Telegraf
} from 'telegraf'
import {
  escapers
} from '@telegraf/entity'
import {
  search
} from './search'

const bot = new Telegraf(process.env.BOT_TOKEN)

const storage = 'https://micael-storage-production.up.railway.app'

const url = 'https://apkdonw.com/store/app?package='

bot.on('text', async (ctx) => {

  const command = '!search'

  const msg = ctx.message.text

  if (msg.startsWith(command)) {

    const content = msg.slice(command.length).trim();

    const results = await search(content)

    if (results.length === 0) {
      return ctx.reply(
        'Sem resultados!',
        {
          //	parse_mode: 'MarkdownV2',
          reply_markup: {
            inline_keyboard: [
              [{
                text: 'Acesse Apkdonw',
                url: `https://apkdonw.com`
              }]
            ]
          },
          reply_to_message_id: ctx.message.message_id
        }
      );

    }

    for (const result of results) {

      await ctx.sendChatAction('typing');

      const name = escapers.MarkdownV2(result.name)
      const pkg = escapers.MarkdownV2(result.package)
      const desc = escapers.MarkdownV2(result.short_description)

      const msg = `*Nome:* ${name}\n\n*Package:* ${pkg} \n\n*Descrição:* ${desc}`

      ctx.replyWithPhoto(
        {
          url: `${storage}${result.icon}`
        },
        {
          caption: msg,
          parse_mode: 'MarkdownV2',
          reply_markup: {
            inline_keyboard: [
              [{
                text: `Baixe agora - ${result.name}`,
                url: `${url}${result.package}`
              }],
              [{
                text: 'Publique seu APK',
                url: `https://console.apkdonw.com`
              }]
            ]
          },
          reply_to_message_id: ctx.message.message_id
        }
      )
    }
  }
})

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

bot.launch();