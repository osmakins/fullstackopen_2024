import { useState } from "react"
import Country from "./Country"

const ShowCountry = ({ country }) => {

    const [show, setShow] = useState(false)
    const [btText, setBtText] = useState("show")
  
    const handleDisplay = () => {
      setShow(!show)
      setBtText(btText === "show" ? "hide" : "hide" ? "show" : "")
    }
  
    return (
      <div>
        {country.name.common}
        <button onClick={handleDisplay}>{btText}</button>
        {show && (<Country country = {country}/>)}
      </div>
    )
  }

export default ShowCountry