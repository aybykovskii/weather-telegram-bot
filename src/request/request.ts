import axios, { AxiosResponse } from 'axios'

import { ENV } from '@helpers/environment'

const WeatherInstance = axios.create({ baseURL: ENV.WEATHER_URL })

export const Request = async <T>(url: string) =>
  WeatherInstance.get(url)
    .then((response: AxiosResponse<T>) => response.data)
    .catch((e) => e)
