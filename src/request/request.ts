import axios, { AxiosResponse } from 'axios'

const WeatherInstance = axios.create({ baseURL: 'https://api.openweathermap.org/' })

export const Request = async <T>(url: string) =>
  WeatherInstance.get(url)
    .then((response: AxiosResponse<T>) => response.data)
    .catch((e) => e)
