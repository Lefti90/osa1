const Course = (props) => {
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
  const total = course.parts.reduce((previousValue, currentValue) => {
    console.log('pV ',previousValue, 'cV ', currentValue.exercises)
    return previousValue + currentValue.exercises
  },0)
  return (
    <div>
      <Course course={course} coursename={course.name} parts={course.parts}/>
      <b>Total of {total} exercises</b>
    </div>
  )
}

export default App;
