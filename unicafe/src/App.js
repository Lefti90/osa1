import { useState } from 'react'

const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return (
    <div>      
      <p>good {props.good} </p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>   
    </div>
  )
}

const CombinedValues = (props) => {
  const totalValue = props.good + props.neutral + props.bad
  const averageValue = totalValue / 3
  const positiveValue = props.good / totalValue * 100

  return(
    <div>
    <p>all {totalValue}</p>
    <p>average {averageValue}</p>
    <p>positive {positiveValue} %</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = newValue => {
    console.log('value now', newValue)
    setGood(newValue)
  }
  const setNeutralValue = newValue => {
    console.log('value now', newValue)
    setNeutral(newValue)
  }
  const setBadValue = newValue => {
    console.log('value now', newValue)
    setBad(newValue)
  }



  return (
    <div>
      <Header text='give feedback'/>
      <Button handleClick={() => setGoodValue(good + 1)} text="good" />
      <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(bad + 1)} text="bad" />
      <Header text='statistics'/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
      <CombinedValues good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App