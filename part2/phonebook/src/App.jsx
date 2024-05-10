import { useEffect, useState } from 'react'
import Persons from './component/Persons'
import {FilterPerson} from './component/FilterPerson'
import AddPerson from './component/AddPerson'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [pbSearch, setPbSearch] = useState('')

  const handleName = (event) => setNewName(event.target.value)
  const handleNumber = (event) => setNewNumber(event.target.value)
  const handleSearch = (event) => setPbSearch(event.target.value)

  useEffect(() => {
    personService.getAll().then(repsonse => setPersons(repsonse.data))
  }, [])

  const handleSubmit = (event) =>{
    event.preventDefault()

    const isNameExist = persons.filter(person => person.name === newName)
    if(isNameExist.length > 0){
      window.alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    personService.create(newPerson).then(response => setPersons(persons.concat(response.data)))
  }

  const personsToShow = pbSearch ? persons.filter(person => person.name.toLowerCase().includes(pbSearch.toLowerCase())) : persons

  return (
    <div>
      <h2>Phonebook</h2>
       <FilterPerson pbSearch={pbSearch} handleSearch={handleSearch}/>
      <h2>Add new person</h2>
      <AddPerson handleSubmit={handleSubmit} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber}/>      
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App