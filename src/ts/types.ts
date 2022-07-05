export type GeocodingType = {
  lon: number
  lat: number
}

export type GetGeocodingType = GeocodingType[]

type WeatherType = {
  description: string
  icon: string
}

export type GetWeatherType = {
  name: string
  weather: WeatherType[]
  clouds: { all: string }
  wind: { speed: string }
  main: {
    temp: number
    feels_like: number
    // Давление
    pressure: number
    // Влажность
    humidity: number
  }
}
