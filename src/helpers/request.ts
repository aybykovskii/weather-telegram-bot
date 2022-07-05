import { stringify } from 'qs'

import { Request } from '@request'
import { GeocodingType, GetGeocodingType, GetWeatherType } from '@ts'
import { GEOCODING_GET_URL, LANG, UNITS, WEATHER_GET_URL } from '@constants'

import { ENV } from './environment'

const getQuery = (q: Record<string, string | number>) =>
  stringify({ ...q, appid: ENV.WEATHER_API_KEY }, { addQueryPrefix: true })

export const GetGeoCoding = async (q: string): Promise<GeocodingType> =>
  Request<GetGeocodingType>(`${GEOCODING_GET_URL}${getQuery({ q })}`).then(([{ lat, lon }]) => ({ lat, lon }))

export const GetWeather = async ({ lat, lon }: GeocodingType): Promise<GetWeatherType> =>
  Request<GetWeatherType>(`${WEATHER_GET_URL}${getQuery({ lat, lon, lang: LANG, units: UNITS })}`).then((data) => data)
