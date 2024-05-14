import ShowCountry from "./ShowCountry"
import Country from "./Country"

const Countries = ({countrySearch, countryResults}) =>{
    
    return(
        <div>
        {countrySearch ? (countryResults.length > 10) ? <p>Too many matches, make search more specific</p> : (countryResults.length === 1) ?
            countryResults.map((country, i) => <Country key={i} country={country}/>) :
            countryResults.map((country, i) => <ShowCountry key={i} country={country}/>) : <p></p>}
        </div>
    )
  }

export default Countries