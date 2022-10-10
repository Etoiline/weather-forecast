import { useOpenWeatherMapAPI } from "../../service/OpenWeatherMapAPI"
import WeatherOverview from "../weatherOverview/WeatherOverview"

function SelectCity() {
  const {loading, data, error} = useOpenWeatherMapAPI()

  const ShowData = () => {
    if(error){
      console.log(error)
    return 0
    }
    else {
      return (
      <WeatherOverview data={data} />
      )
    }
  }
  console.log('data', data)
  
    return (
      <div>
          {!loading ? <ShowData /> : <></>}
      </div>
  
    )
  }
  
  export default SelectCity