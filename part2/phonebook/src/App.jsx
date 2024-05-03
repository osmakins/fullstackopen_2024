import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '04-5431200'}
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleName = (event) => setNewName(event.target.value)
  const handleNumber = (event) => setNewNumber(event.target.value)

  const handleSubmit = (event) =>{

    event.preventDefault();
    const isNameExist = persons.filter(person => person.name === newName)
    
    if(isNameExist.length > 0){
      window.alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleName}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =><p>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App