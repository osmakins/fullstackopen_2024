import { useEffect, useState } from 'react'
import countryService from './services/countryService'
import Country from './components/Country'

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
      <Country countrySearch={countrySearch} findCountry={findCountry}/>
    </>
  )
}

export default App
