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
  const [notify, setNotify] = useState('')

  const handleName = (event) => setNewName(event.target.value)
  const handleNumber = (event) => setNewNumber(event.target.value)
  const handleSearch = (event) => setPbSearch(event.target.value)

  useEffect(() => {
    personService.getAll().then(repsonse => setPersons(repsonse))
  }, [])

  const handleSubmit = (event) =>{
    event.preventDefault()

    const isNameExist = persons.filter(person => person.name === newName)
    if(isNameExist.length > 0){
      const editNumber = window.confirm(`${newName} is already added to phonebook. Edit the number?`)
      if(editNumber){
          personService.update(isNameExist[0].id, {name: newName, number: newNumber}).then(response =>{
          setPersons(persons.map(person => (person.id === isNameExist[0].id) ? { ...person, number: response.number } : person))
          setNotify(['success', `Updated ${response.name} successfully`])
          setTimeout(() => {
            setNotify([])
          }, 5000)
        })
      }
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    personService.create(newPerson).then(response => {setPersons(persons.concat(response))
      console.log(response)
      setNotify(['success', `Added ${response.name} successfully`])
      setTimeout(() => {
        setNotify([])
      }, 5000)
    })
  }
  
  const handleDelete = (person) =>{
    const remove = window.confirm(`Delete ${person.name} ?`)
    
    if(remove){
      personService.remove(person.id).then(response => setPersons(response))
      .catch(error => {
        //console.log(error.response.status)
        if(error.response.status === 404){
            setNotify(['error', `Information of ${person.name} has already been removed from the server`])
            setTimeout(() => {
            setNotify([])
          }, 5000) 
        }
      })
    }
  }

  const personsToShow = pbSearch ? persons.filter(person => person.name.toLowerCase().includes(pbSearch.toLowerCase())) : persons

  return (
    <div>
      <h2>Phonebook</h2>
       <FilterPerson pbSearch={pbSearch} handleSearch={handleSearch}/>
      <h2>Add new person</h2>
      <AddPerson notify={notify} handleSubmit={handleSubmit} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber}/>      
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App