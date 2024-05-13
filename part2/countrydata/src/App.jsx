import { useEffect, useState } from 'react'
import countryService from './services/countryService'

function App() {
  const [countries, setCountries] = useState([])
  const [findCountry, setFindCountry] = useState('')

  useEffect(() => {
    countryService.getAll().then(response => setCountries(response))
  },[])

  const handleSearch = (event) => setFindCountry(event.target.value)

  const countrySearch = countries.filter(country => country.name.common.toLowerCase().includes(findCountry.toLowerCase()));


  return (
    <>
      find countries: <input value={findCountry} onChange={handleSearch}/>
      <div>
      {findCountry ? (countrySearch.length > 10) ? <p>Too many matches, make search more specific</p> : (countrySearch.length === 1) ?
        countrySearch.map((country, i) =>
          <div key={i}>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h2>Languages:</h2>
            <ul>
              {Object.values(country.languages).map((language, i) => <li key={i}>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.name.official} width="10%" />
          </div>) :
        countrySearch.map((country, i) => <p key={i}>{country.name.common}</p>) : <p></p>}
    </div>
    </>
  )
}

export default App
