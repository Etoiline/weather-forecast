import axios from 'axios'
import { useEffect, useState } from 'react'

let URL = 'https://api.openweathermap.org/data/2.5/weather?'
const keyAPI = ''



/**
         * Return url accordind to latitude and longitude
         * 
 * @param lat : latitude of city
 * @param lon : longitude of data
         * 
         * @return url : full url requested
         *    
         */
 export function returnURL(lat, lon) {
  return (URL+'lat='+lat+'&lon='+lon+'&appid='+keyAPI+'&units=metric')

}







/**
 * Return data
 * 
 * @param lat : latitude of city
 * @param lon : longitude of data
 * 
 * @return loadingMain : indicates loading status
 * @return dataMain : object containing id user, keyData object (macros data), user score and user info 
 * @return errorMain : indicates any errors
 *    
 */
 export const useOpenWeatherMapAPI = (lat='48.853', lon='2.349') => {
  const url = returnURL(lat, lon)
  console.log('URRRRL', url)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState(undefined)

  useEffect(() => {
    const load = async () => {
      try {
        const response = await axios.get(url)
        let dataUser = response.data
        setData(dataUser)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    load()
  }, [])


  return {
    loading,
    data,
    error
  }
}

