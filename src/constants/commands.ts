import { BotCommand } from 'node-telegram-bot-api'
import { Commands } from '../ts'

export const commands: Partial<Record<Commands, BotCommand>> = {
  START: {
    command: '/start',
    description: 'Приветствие',
  },
  WEATHER: {
    command: '/weather',
    description: 'Узнать погоду',
  },
}
