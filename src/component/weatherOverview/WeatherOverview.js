import weatherOverview from './WeatherOverview.module.css'

function WeatherOverview(props) {
  let iconURLBase = 'http://openweathermap.org/img/wn/' //http://openweathermap.org/img/wn/10d@2x.png
  const icon = props.data.weather[0].icon
  const iconURL = iconURLBase+icon+'@2x.png'
  const temperature = Math.round(props.data.main.temp)
  const description = props.data.weather[0].description
  const humidity = props.data.main.humidity
  const wind = props.data.wind.speed
  const date = new Date(props.data.dt*1000)
  const day = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
  const month = ['Janv', 'Fevr', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec']

  return (
    <div className={weatherOverview.main}>
      <div className={weatherOverview.date}>
        {date.getHours()}:{date.getMinutes()} - {day[date.getDay()]} {date.getDate()} {month[date.getMonth()]} {date.getFullYear()}
      </div>
      <div className={weatherOverview.iconTemp}>
        <img src={iconURL} alt='icone meteo' />
        <p>{temperature}&deg;C</p>
      </div>
      <div className={weatherOverview.description}>
        {description}
      </div>
      <div className={weatherOverview.humidityWind}>
        <div className={weatherOverview.humidityWind__humidity}>
          <p>Humidité</p>
          <p>{humidity} %</p>
        </div>
        <div className={weatherOverview.humidityWind__humidity}>
          <p>Vitesse du vent</p>
          <p>{wind} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherOverview;
