import { ReactComponent as BarometerIcon } from './assets/images/barometer.svg';
import { ReactComponent as CelsiusIcon } from './assets/images/celsius.svg';
import { ReactComponent as CloudIcon } from './assets/images/cloud.svg';
import { ReactComponent as HumidityIcon } from './assets/images/humidity.svg';
import { ReactComponent as RainIcon } from './assets/images/rain.svg';
import { ReactComponent as SnowIcon } from './assets/images/snow.svg';
import { ReactComponent as SunriseIcon } from './assets/images/sunrise.svg';
import { ReactComponent as SunsetIcon } from './assets/images/sunset.svg';
import { ReactComponent as WindIcon } from './assets/images/wind.svg';
import { ReactComponent as WindDirectionIcon } from './assets/images/wind-deg.svg';
import { ReactComponent as FogIcon } from './assets/images/fog.svg';

export const WeatherIcon = ({ condition }) => {
    switch(condition){
        case 'barometer':
            return <BarometerIcon className={`weather-condition-block__icon-${condition} weather-condition-block__icon`} />
        case 'celsius':
            return <CelsiusIcon className={`weather-condition-block__icon-${condition} weather-condition-block__icon`} />
        case 'cloud':
            return <CloudIcon className={`weather-condition-block__icon-${condition} weather-condition-block__icon`} />
        case 'rain':
            return <RainIcon className={`weather-condition-block__icon-${condition} weather-condition-block__icon`} />
        case 'humidity':
            return <HumidityIcon className={`weather-condition-block__icon-${condition} weather-condition-block__icon`} />
        case 'snow':
            return <SnowIcon className={`weather-condition-block__icon-${condition} weather-condition-block__icon`} />
        case 'sunrise':
            return <SunriseIcon className={`weather-condition-block__icon-${condition} weather-condition-block__icon`} />
        case 'sunset':
            return <SunsetIcon className={`weather-condition-block__icon-${condition} weather-condition-block__icon`} />
        case 'wind':
            return <WindIcon className={`weather-condition-block__icon-${condition} weather-condition-block__icon`} />
        case 'wind-deg':
            return <WindDirectionIcon className={`weather-condition-block__icon-${condition} weather-condition-block__icon`} />
        case 'fog':
            return <FogIcon className={`weather-condition-block__icon-${condition} weather-condition-block__icon`} />
        default:
            return <p>Icon does not exist.</p>
    }
}
