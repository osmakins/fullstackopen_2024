
const Part = (props) =>{
    return ( 
        <p>{props.part} {props.exercise}</p>
     );
}

const Content = (props) => {
    console.log(props)
    return ( 
        <div>
            <Part part={props.parts.parts[0].name} exercise={props.parts.parts[0].exercises}/>
            <Part part={props.parts.parts[1].name} exercise={props.parts.parts[1].exercises}/>
            <Part part={props.parts.parts[2].name} exercise={props.parts.parts[2].exercises}/>
        </div>
     );
}
 
export default Content;