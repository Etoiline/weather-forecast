import { useOpenWeatherMapAPI } from "../../service/OpenWeatherMapAPI"
import WeatherOverview from "../weatherOverview/WeatherOverview"
import Chart from '../chart/Chart.js'
import selectCity from './SelectCity.module.css'


function SelectCity() {


  const {loading, data, error} = useOpenWeatherMapAPI()


  const ShowData = () => {
    if(error){
      console.log(error)
    return 0
    }
    else {

      
      return (
        <div className={selectCity.main}>
          <div className={selectCity.overview}>
            <WeatherOverview data={data} />
          </div>
      <Chart />
      </div>
      )
    }
  }
  //console.log('data', data)
  
    return (
      <div>
          {!loading ? <ShowData /> : <></>}
      </div>
  
    )
  }
  
  export default SelectCity