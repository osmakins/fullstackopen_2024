import { useEffect, useState } from 'react'
import countryService from './services/countryService'
import Countries from './components/Countries'

function App() {

  const [countries, setCountries] = useState([])
  const [countrySearch, setCountrySearch] = useState('')

  useEffect(() => {
    countryService.getAll().then(response => setCountries(response))
  },[])

  const handleSearch = (event) => setCountrySearch(event.target.value)

  const countryResults = countries.filter(country => country.name.common.toLowerCase().includes(countrySearch.toLowerCase()));

  return (
    <>
      find countries: <input value={countrySearch} onChange={handleSearch}/>
      <Countries countryResults={countryResults} countrySearch={countrySearch} />
    </>
  )
}

export default App
