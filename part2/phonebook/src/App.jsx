import { useState } from 'react'
import Persons from './component/Persons'
import {FilterPerson} from './component/FilterPerson'
import AddPerson from './component/AddPerson'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [pbSearch, setPbSearch] = useState('')

  const handleName = (event) => setNewName(event.target.value)
  const handleNumber = (event) => setNewNumber(event.target.value)
  const handleSearch = (event) => setPbSearch(event.target.value)

  const handleSubmit = (event) =>{

    event.preventDefault();
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
    setPersons(persons.concat(newPerson))
  }

  const personsToShow = pbSearch ? persons.filter(person => person.name.toLowerCase().includes(pbSearch.toLowerCase())) : persons

  return (
    <div>
      <h2>Phonebook</h2>
       <FilterPerson pbSearch={pbSearch} handleSearch={handleSearch}/>
      <h2>add new person</h2>
      <AddPerson handleSubmit={handleSubmit} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber}/>      
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App