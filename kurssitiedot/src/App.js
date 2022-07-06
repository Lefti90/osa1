const Course = (props) => {
  console.log('Course: ', props.name)
  return(
  <div>
    <h1>{props.coursename}</h1>
    {props.parts.map(part =>
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>)}
  </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return (
    <div>
      <Course course={course} coursename={course.name} parts={course.parts}/>
    </div>
  )
}

export default App;
