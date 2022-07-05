import TelegramBot, { Message } from 'node-telegram-bot-api'
import 'dotenv/config'

import { GeocodingType } from 'ts'
import { commands, FORCE_REPLY, WEATHER_ICON, WEATHER_STICKERS } from './constants'
import { GetGeoCoding, GetWeather, getMessageText, ENV, helloText } from './helpers'

const Bot = new TelegramBot(ENV.BOT_TOKEN, { polling: true })

Bot.setMyCommands(Object.values(commands)).then()

const SendWeatherMessage = async (chatId: number, { lon, lat }: GeocodingType) => {
  await GetWeather({ lat, lon })
    .then(async (data) => {
      const {
        weather: [{ icon }],
      } = data
      const text = getMessageText(data)
      const stickerCode = WEATHER_STICKERS[WEATHER_ICON[parseInt(icon, 10)]]

      await Bot.sendSticker(
        chatId,
        `https://tlgrm.ru/_/stickers/b23/18d/b2318d70-5188-3faf-927d-b1be87d2e83f/${stickerCode}.webp`
      )
      await Bot.sendMessage(chatId, text)
    })
    .catch((e) => {
      console.log(e)
    })
}

Bot.on('message', async (msg: Message) => {
  const chatId = msg.chat?.id
  const userMsg = msg.text
  const { location } = msg

  if (location) {
    const { latitude, longitude } = location
    await SendWeatherMessage(chatId, { lon: longitude, lat: latitude })
    return
  }

  switch (userMsg) {
    case commands.START?.command: {
      await Bot.sendSticker(
        chatId,
        'https://tlgrm.ru/_/stickers/b23/18d/b2318d70-5188-3faf-927d-b1be87d2e83f/192/23.webp'
      )
      await Bot.sendMessage(chatId, helloText)
      return
    }

    case commands.WEATHER?.command: {
      await Bot.sendMessage(chatId, 'В каком городе хотите узнать погоду?', FORCE_REPLY)
      return
    }

    default: {
      GetGeoCoding(msg.text || '')
        .then(async ({ lat, lon }) => {
          if (lon && lat) {
            await SendWeatherMessage(chatId, { lat, lon })
          }
        })

        .catch(() => {
          Bot.sendMessage(chatId, 'Населенный пункт с таким названием не найдем, попробуй другой)')
        })
    }
  }
})
