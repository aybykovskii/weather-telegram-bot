import 'dotenv/config'

import { ENV_KEYS } from '@ts'

import { GenericObject } from './object'

class Environment {
  public keys: Record<ENV_KEYS, string>

  constructor() {
    this.keys = GenericObject.values(ENV_KEYS).reduce(
      (acc, key) => ({ ...acc, [key]: process.env[key] || '' }),
      {} as Record<ENV_KEYS, string>
    )
  }
}

export const ENV = new Environment().keys
