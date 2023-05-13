import WeatherCondition from "./WeatherCondition"
import { ReactComponent as LocationIcon } from "./assets/images/location-dot-solid.svg"
import { useGetCurrentWeatherQuery } from "./services/weather"
import { WeatherIcon } from "./WeatherIcon"
import moment from 'moment'

function App() {
  const { data, error, isLoading } = useGetCurrentWeatherQuery()
  console.log(data)
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className="header-block">
            <h1 className="header-block__text">Weather Dashboard</h1>
          </div>
          <div className="nav-block">
            <input className="nav-block__input" type="text" placeholder="Search city" />
          </div>
          <div className="main-block">
            <h2 className="main-block__text"><LocationIcon className="main-block__text-icon" /> Weather for {data.name}, {data.weather[0].main}</h2>
            <div className="main-block-weather">
              <div className="main-block-weather__temperature-row">
                <img className="main-block-weather__img" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="Weather Icon" />
                <div className="main-block-weather__temp-block">
                  <p className="main-block-weather__temp-max">{Math.round(data.main.temp_max)}<span>&#8451;</span></p>
                  <p className="main-block-weather__temp-min">{Math.round(data.main.temp_min)}<span>&#8451;</span></p>
                </div>
              </div>
              <div className="main-block-weather__sun-setting-row">
                <div className="main-block-weather__sun-setting-item">
                  <p className="main-block-weather__sunrise">Sunrise</p>
                  <WeatherIcon condition="sunrise" />
                  <p className="main-block-weather__time">{moment.unix(data.sys.sunrise).format('LT')}</p>
                </div>
                <div className="main-block-weather__sun-setting-item">
                  <p className="main-block-weather__sunset">Sunset</p>
                  <WeatherIcon condition="sunset" />
                  <p className="main-block-weather__time">{moment.unix(data.sys.sunset).format('LT')}</p>
                </div>
              </div>
              <p className="main-block-weather__description">{data.weather[0].description}</p>
            </div>
            <div className="conditions-block">
              <WeatherCondition name="Wind Speed" value={data.wind.speed} condition="wind" unit="m/s"/>
              <WeatherCondition name="Wind Direction" value={data.wind.deg} condition="wind-deg" />
              <WeatherCondition name="Humidity" value={data.main.humidity} condition="humidity" unit="%"/>
              <WeatherCondition name="Pressure" value={data.main.pressure} condition="barometer" unit="hPa"/>
              {/* <WeatherCondition name="Precipitation" value={data.rain["1h"]} condition="rain" unit="mm"/> */}
              <WeatherCondition name="Clouds" value={data.clouds.all} condition="cloud" unit="%"/>
              {/* <WeatherCondition name="Snow" value={data.snow["1h"]} condition="snow" unit="mm"/> */}
              <WeatherCondition name="Visibility" value={data.visibility} condition="fog" unit="km"/>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default App
