import { useOpenWeatherMapForecastAPI } from "../../service/OpenWeatherMapAPI"
import ChartDesign from './chartDesign/ChartDesign'
import ChartForecast from './chartForecast/ChartForecast'
import chart from './Chart.module.css'
import { useState } from "react"

function Chart() {
  const {loadingForecast, dataForecast, errorForecast} = useOpenWeatherMapForecastAPI()
  const [selectedDay, setSelectedDay] = useState(0)

  const ShowData = () => {
    if(errorForecast){
      console.log(errorForecast)
    return 0
    }
    else {
      return (
        <div className={chart.main}>
          <ChartDesign data={dataForecast} selected={selectedDay} />
          <ChartForecast data={dataForecast} selected={selectedDay} setFunction={setSelectedDay} />
      </div>
      )
    }
  }

  //console.log('dataForecast', dataForecast)
  

  
  return (
    <div id='chart'>
      {!loadingForecast ? <ShowData /> : <></>}
    </div>
  )
}

export default Chart