// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
const API_KEY = '0f515811536c36c2f501704df86ab5e7'
const lat = 44.34
const lon = 10.99

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: () => `weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentWeatherQuery } = weatherApi
