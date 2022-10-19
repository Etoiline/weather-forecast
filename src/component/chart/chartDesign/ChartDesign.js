import * as d3 from 'd3'
import { useEffect } from 'react'
import chartDesign from './ChartDesign.module.css'

function ChartDesign(props) {

  const selected = props.selected
  let temperature = [Math.round(props.data.list[0].main.temp), 
  Math.round(props.data.list[8].main.temp), 
  Math.round(props.data.list[16].main.temp), 
  Math.round(props.data.list[24].main.temp)]

console.log('chart', props.selected)
  useEffect(() => {
    if (props.data.cod) {
      createChart()
    }
  }, [])

  /**
   * Main function to create chart 
   *    
   */
   function createChart() {

    document.getElementById('chart__design').innerHTML = ''



     //add two elements (at the begginning and at the end) 
     //there were outside the chart but will allow a continuous line
     const prevTemperature = Math.round(2 * temperature[0] - temperature[1])
     const nextTemperature = Math.round(2 * temperature[temperature.length - 1] - temperature[temperature.length - 2])
     temperature.unshift(prevTemperature)
     temperature.push(nextTemperature)
   

    let chart = d3.select("#chart__design")
      .append("svg")
      .attr('class', 'svg_session_chart')
      .attr('height', '220px')
      .attr('width', '600px')



     //title
    chart.append('text')
      .attr('x', 50)
      .attr('y', 20)
      .attr('width', '200px')
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .style('font-family', 'Roboto')
      .style('font-size', '1.2em')
      .text('Température')

    // //horizontal axis
    const xScale = d3.scaleLinear()
      .domain([1, 4])
      .range([0, 560])

    // Add Y axis
    var yScale = d3.scaleLinear()
      .domain([0, Math.max(...temperature)])
      .range([0, 100])

      //test area
var curveFunc = d3.area()
.x((d, i) => xScale(i) + 28)     // Position of both line breaks on the X axis
.y1((d) => 180 - yScale(d))    // Y position of top line breaks
.y0(200)                            // Y position of bottom line breaks (200 = bottom of svg area)
.curve(d3.curveMonotoneX)
// Add the path using this helper function
  chart.append('path')
  .attr('d', curveFunc(temperature))
  .attr('stroke', '#5596f6')
  .attr('fill', '#eef4fe');


    // Add the dot and info
      let temperatureDay = temperature[selected+1] //+1 parce que j'ai rajouté une valeur en amont pour la continuité du graphique
      console.log('temperatureD', temperature,temperatureDay)

      let temperaturePoint = chart.append("g")
      temperaturePoint.append("svg:text") //texte : temperature du jour
        .attr("x", xScale(selected) + 210)
        .attr("y", 160 - yScale(temperatureDay))
        .style("text-anchor", "middle")
        .style("font-size", "1.1em")
        .style("fill", "#5596f6")
        .text(temperatureDay + "°C")
        .attr("opacity", "1")
        temperaturePoint.append("svg:circle") //point sur le graphique
        .attr("cx", xScale(selected) + 210)
        .attr("cy", 180 - yScale(temperatureDay))
        .attr("r", 4)
        .attr("stroke-width", "1.8")
        .style("fill", "#5596f6")
        .style("stroke", "#fff")
        .attr("opacity", "1")



  }


  return (
      <div id='chart__design' className={chartDesign.main}>

      </div>

  )
}

export default ChartDesign