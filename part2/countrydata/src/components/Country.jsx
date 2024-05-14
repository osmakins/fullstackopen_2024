import { useEffect, useState } from "react"
import axios from "axios"


const Weather = ({weather}) => {

  console.log(weather)

  if (weather === undefined) return <p>...</p>

  return(
    <div>
      <h2>Weather in {weather.location.name} at {weather.current.observation_time}</h2>
      <p>Temperature: {weather.current.temperature} &deg;C</p>
      <img src={weather.current.weather_icons[0]}/>
      <p>Wind: {weather.current.wind_speed} Km/h</p>
    </div>
  )
}


const Country = ({ country }) => {

    const [weather, setWeather] = useState(undefined)

    useEffect(() => {
        axios.get('http://api.weatherstack.com/current', {
            params: {
            access_key: import.meta.env.VITE_WEATHER_API_KEY,
            query: country.capital[0],
            units: 'm'
          }
        }).then(reponse => setWeather(reponse.data))
        .catch(error => console.log(error))
    },[])

    console.log(weather)

    return (
        <div>
          <h1>{country.name.common}</h1>
          <p>Capital: {country.capital}</p>
          <p> Area: {country.area}</p>
          <h2>Languages:</h2>
          <ul>
            {Object.values(country.languages).map((language, i) => <li key={i}>{language}</li>)}
          </ul>
          <img src={country.flags.png} alt={country.name.official} width="10%" />
          <Weather weather={weather} />
        </div>
    )
  }

export default Country