
const Persons = ({ personsToShow, handleDelete }) => {
    return (
      <div>
        {personsToShow.map(person =><p key={person.id}>{person.name} {person.number} <button onClick={() => handleDelete(person)}>delete</button></p>)}
      </div>
    );
  }
  
  export default Persons;