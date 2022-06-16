const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Content = (content) => {
  console.log(content)
  return(
    <div>
      {content.parts.map(x =><p>{x.name} {x.exercises}</p>)}
    </div>
  )
}


const Total = (total) =>{
  let x = 0;
  total.parts.forEach(y => {x += y.exercises})
  return(
    <div>
      <p>Number of exercises {x}</p>
    </div>
  )
}

export default App
