import { useOpenWeatherMapAPI, useGeocodingAPI } from "../../service/OpenWeatherMapAPI"
import WeatherOverview from "../weatherOverview/WeatherOverview"
import Chart from '../chart/Chart.js'
import selectCity from './SelectCity.module.css'
import { useState } from "react"

function SelectCity() {
  const {loading, data, error} = useOpenWeatherMapAPI()

  const {loadingGeo, dataGeo, errorGeo} = useGeocodingAPI()
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  if (loadingGeo===false){
    console.log('loading geo', dataGeo)
  }


  const ShowData = () => {
    if(error){
      console.log(error)
    return 0
    }
    else {
      
      return (
        <div className={selectCity.main}>
      <WeatherOverview data={data} />
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