import { GetWeatherType } from '../ts'

export const getMessageText = ({
  name,
  weather: [{ description }],
  wind: { speed },
  clouds: { all },
  main: { temp, feels_like: feelsLike, pressure, humidity },
}: GetWeatherType) => `
 ${name} - ${description}
Температура ${Math.round(temp)}°C, ощущается как ${Math.round(feelsLike)}°C
Скорость ветра ${speed} м/с
Давление атмосферного воздуха ${pressure} мм.рт.ст.
Влажность ${humidity}%
Облачность ${all}%
 `

export const helloText = `
Привет!
Я бот, который позволяет узнавать погоду в любой точке мира.
Ты можешь либо написать мне название населенного пункта, либо отправить его геолокацию через скрепку ниже.
`
