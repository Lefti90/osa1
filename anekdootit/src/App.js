import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

var currentNumber = 0
const votesZero = new Uint8Array(7);
const votes = [...votesZero]
var max = 0
var index = 0


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [current, setCurrent] = useState(0)

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomizeAnecdote = newState =>{
    currentNumber = getRandomInt(anecdotes.length)
    newState = currentNumber
    setSelected(newState)
  }

  const voteCurrent = current => {
    votes[currentNumber] += 1
    setCurrent(current + 1) 
    max = Math.max(...votes)
    index = votes.indexOf(max)
    console.log('hindex: ',index)
  }

  console.log(votes)
  console.log('current anecdote: ', currentNumber)
  console.log('votes: ', votes[currentNumber])
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p><Button handleClick={() => randomizeAnecdote()} text='next anecdote'/></p>
      <p><Button handleClick={() => voteCurrent(current)} text='vote'/></p>
      {anecdotes[selected]}
      <p>has {votes[currentNumber]} votes</p>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[index]}</p>
      <p>has {votes[index]} votes</p>
    </div>
  )
}

export default App