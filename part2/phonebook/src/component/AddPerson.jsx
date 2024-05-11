import Notification from "./Notification"

const AddPerson = ({notify, handleSubmit, newName, handleName, newNumber, handleNumber}) =>{
    return(
    <>
    <Notification notify={notify}/>
    <form onSubmit={handleSubmit}>
        <div>
            name: <input value={newName} onChange={handleName}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNumber}/></div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
    </>
    )
}

export default AddPerson