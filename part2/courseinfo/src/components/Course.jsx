const Header = ({ header }) => <h1>{header}</h1>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => <>{parts.map(part=><Part key={part.id} part={part} />)}</>

const Total = ({parts}) => {
  const total = parts.map(part => part.exercises).reduce((a, b)=>a+b)
  return(<><p>Total of {total} exercises</p></>)
}

const Course = ({course})=>{

  return(
    <>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course