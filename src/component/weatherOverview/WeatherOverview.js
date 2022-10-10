import weatherOverview from './WeatherOverview.module.css'

function WeatherOverview(props) {
  let iconURLBase = 'http://openweathermap.org/img/wn/' //http://openweathermap.org/img/wn/10d@2x.png
  const icon = props.data.weather[0].icon
  const iconURL = iconURLBase+icon+'@2x.png'
  const temperature = props.data.main.temp
  return (
    <div className={weatherOverview.main}>
      <img src={iconURL} />
      <p>{temperature}&deg;C</p>
    </div>
  );
}

export default WeatherOverview;
