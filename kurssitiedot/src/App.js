const Part = (props) =>{
  console.log('Part: ', props.parts[0].name)
  const total = props.parts.reduce((previousValue, currentValue) => {
  console.log('pV ',previousValue, 'cV ', currentValue.exercises)
  return previousValue + currentValue.exercises
},0)
  return(
    <div>
        {props.parts.map(part =>
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>)}
          <b>Total of {total} exercises</b>
    </div>
  )
}

const Courses = (props) => {
  return(
  <div>   
      {props.courses.map(course => {        
        return (
          <div>
            <h2 key={course.id}>{course.name}</h2>
            <Part parts={course.parts}/>
          </div>
        )      
      })
      }
  </div>
  )
}

const App = () => {

  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Courses courses={courses} />
    </div>
  )
}

export default App;