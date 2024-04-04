const Total = (props) => {

    const total = props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises

    return ( 
        <p>Number of exercises {total}</p>
     );
}
 
export default Total;