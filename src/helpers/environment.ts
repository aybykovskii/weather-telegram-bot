import 'dotenv/config'
import { ENV_KEYS } from '@ts'
import { GenericObject } from './object'

class Environment {
  public keys: Record<ENV_KEYS, string>

  constructor() {
    this.keys = GenericObject.values(ENV_KEYS).reduce((acc, key) => ({ ...acc, [key]: process.env[key] || '' }), {
      [ENV_KEYS.BOT_TOKEN]: '',
      [ENV_KEYS.WEATHER_API_KEY]: '',
    })
  }
}

export const ENV = new Environment().keys
