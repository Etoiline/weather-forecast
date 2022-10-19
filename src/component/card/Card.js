import card from './Card.module.css'

function Card(props) {
  const monthLetter = {'01':'Janv', '02':'Fevr', '03':'Mars', '04':'Avr', '05':'Mai', '06':'Juin', '07':'Juil', '08':'Aout', '09':'Sept', '10':'Oct', '11':'Nov', '12':'Dec'}
let iconURLBase = 'http://openweathermap.org/img/wn/'
const date = props.data.dt_txt
const month = monthLetter[date.substr(5,2)]
const day = date.substr(8,2)
const icon = props.data.weather[0].icon
const iconURL = iconURLBase+icon+'@2x.png'
const humidity = props.data.main.humidity
const selected = props.index===props.selected?true:false
//console.log('card',selected, props.index, props.selected)
  
  return (
    <div className={selected ? card.selected : card.unselected}>
      <p>{day} {month}</p>
      <img src={iconURL} alt='icone meteo' />
      <p>Humidity</p>
      <p>{humidity} %</p>

    </div>
  )
}

export default Card