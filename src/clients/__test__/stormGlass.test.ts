import { StormGlass } from '@src/clients/stormGlass'
import axios from 'axios'
import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json'
import stormGlassNormalizedResponse from '@test/fixtures/stormglass_normalized_response.json'

jest.mock('axios')

describe('StormGlass client', () => {
  it('should return the normalized forescast from the StormGlass service', async () => {
    const lat = -33.792726
    const lng = 151.289824

    axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture)

    const stormGlass = new StormGlass(axios)
    const response = await stormGlass.fetchPoints(lat, lng)
    expect(response).toEqual(stormGlassNormalizedResponse)
  })
})

/**
 * forecast: [
          {
            lat: -33.792726,
            lng: 151.289824,
            name: 'Manly',
            position: 'E',
            rating: 2,
            swellDirection: 64.26,
            swellHeight: 0.15,
            swellPeriod: 3.89,
            time: '2020-04-26T00:00:00+00:00',
            waveDirection: 231.38,
            waveHeight: 0.47,
            windDirection: 299.45,
          },
        ],
 */
