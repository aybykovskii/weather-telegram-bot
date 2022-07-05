export enum Weather {
  CLEAR_SKY = 'CLEAR_SKY',
  FEW_CLOUDS = 'FEW_CLOUDS',
  SCATTERED_CLOUDS = 'SCATTERED_CLOUDS',
  BROKEN_CLOUDS = 'BROKEN_CLOUDS',
  SHOWER_RAIN = 'SHOWER_RAIN',
  RAIN = 'RAIN',
  THUNDERSTORM = 'THUNDERSTORM',
  SNOW = 'SNOW',
  MIST = 'MIST',
}

export const WEATHER_ICON: Record<number, Weather> = {
  1: Weather.CLEAR_SKY,
  2: Weather.FEW_CLOUDS,
  3: Weather.SCATTERED_CLOUDS,
  4: Weather.BROKEN_CLOUDS,
  9: Weather.SHOWER_RAIN,
  10: Weather.RAIN,
  11: Weather.THUNDERSTORM,
  13: Weather.SNOW,
  50: Weather.MIST,
}
export const WEATHER_STICKERS: Record<Weather, number> = {
  CLEAR_SKY: 7,
  FEW_CLOUDS: 2,
  SCATTERED_CLOUDS: 2,
  BROKEN_CLOUDS: 4,
  SHOWER_RAIN: 4,
  RAIN: 11,
  THUNDERSTORM: 3,
  SNOW: 20,
  MIST: 18,
}
