import { WeatherIcon } from "./WeatherIcon"

function WeatherCondition({name, value, condition, unit}){
    return (
        <div className="weather-condition-block">
          <p className="weather-condition-block__name">{name}</p>  
          <WeatherIcon condition={condition} />
          <p className="weather-condition-block__text">{value} <span className="weather-condition-block__text--unit">{unit ? unit : ''}</span></p>
        </div>
    )
}

export default WeatherCondition
