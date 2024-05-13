
import ShowCountry from "./ShowCountry"



const Country = ({findCountry, countrySearch}) =>{
    
    return(
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
            countrySearch.map((country, i) => <ShowCountry key={i} country={country}/>) : <p></p>}
        </div>
    )
  }

export default Country