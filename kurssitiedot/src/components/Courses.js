const Part = (props) =>{
    const total = props.parts.reduce((previousValue, currentValue) => {
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
            <div key={course.id}>
              <h2 key={course.id}>{course.name}</h2>
              <Part parts={course.parts}/>
            </div>
          )      
        })
        }
    </div>
    )
  }

  export default Courses