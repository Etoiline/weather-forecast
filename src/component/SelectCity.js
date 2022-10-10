import { useOpenWeatherMapAPI } from "../service/OpenWeatherMapAPI"

function SelectCity() {
  const {loading, data, error} = useOpenWeatherMapAPI()

  const ShowData = () => {
    if(error){
      console.log(error)
    return 0
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