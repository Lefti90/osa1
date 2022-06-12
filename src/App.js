const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (content) => {
  return(
    <div>
      <p>
        {content.part1} {content.exercises1}
      </p>
      <p>
        {content.part2} {content.exercises2}
      </p>
      <p>
        {content.part3} {content.exercises3}
      </p>
    </div>
  )
}


const Total = (total) =>{
  return(
    <div>
      <p>Number of exercises {total.exercises1 + total.exercises2 + total.exercises3}</p>
    </div>
  )
}

export default App
