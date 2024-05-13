import { useState } from "react"

const ShowCountry = ({ country }) => {

    const [show, setShow] = useState(false)
  
    const handleDisplay = () => {
      setShow(!show)
    }
  
    return (
      <div>
        {country.name.common}
        <button onClick={handleDisplay}>show</button>
        {show && (<div>
          <h1>{country.name.common}</h1>
          <p>Capital: {country.capital}</p>
          <p> Area: {country.area}</p>
          <h2>Languages:</h2>
          <ul>
            {Object.values(country.languages).map((language, i) => <li key={i}>{language}</li>)}
          </ul>
          <img src={country.flags.png} alt={country.name.official} width="10%" />
        </div>)}
      </div>
    )
  }

export default ShowCountry