import { useState } from 'react'

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
       filter shown with: <input value={pbSearch} onChange={handleSearch} />
      <h2>add new person</h2>
      
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
      {personsToShow.map(person =><p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App