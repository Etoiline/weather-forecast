import Card from "../../card/Card"
import chartForecast from './ChartForecast.module.css'

function ChartForecast(props) {
  
  const elements = [props.data.list[0], props.data.list[8], props.data.list[16], props.data.list[24]]
  const selected = props.selected

  return (
      <div className={chartForecast.main}>
      {elements.map((value, index) => {
        return <div key={index} className={chartForecast.chart} onClick={(event) => {
          props.setFunction(index)
        }}><Card data={value} selected={selected} index={index} /></div>
      })}
      </div>

  )
}

export default ChartForecast