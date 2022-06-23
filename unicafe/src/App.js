import { useState } from 'react'

const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => {
  return(
  <p>{props.text} {props.value} {props.symbol}</p>
  )
}

const Statistics = (props) => {
  const totalValue = props.good + props.neutral + props.bad
  const averageValue = props.avg / 3
  const positiveValue = props.good / totalValue * 100
  return (
    <div>
      <StatisticsLine text="good" value={props.good}/> 
      <StatisticsLine text="neutral" value={props.neutral}/>      
      <StatisticsLine text="bad" value={props.bad}/>      
      <StatisticsLine text="all" value={totalValue}/>      
      <StatisticsLine text="average" value={averageValue}/>      
      <StatisticsLine text="positive" value={positiveValue} symbol='%'/>     
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAvg] = useState(0)

  const setAvgValue = newAvg => {
    setAvg(newAvg)
  }

  const setGoodValue = newValue => {
    setAvgValue(avg + 1)
    setGood(newValue)
  }
  const setNeutralValue = newValue => {
    setNeutral(newValue)
  }
  const setBadValue = newValue => {
    setAvgValue(avg - 1)
    setBad(newValue)
  }

  if(good===0 && bad===0 && neutral===0){
    return(
      <div>
      <Header text='give feedback'/>
      <Button handleClick={() => setGoodValue(good + 1)} text="good" />
      <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(bad + 1)} text="bad" />
      <Header text='statistics'/>
      <p>No feedback given</p>
      </div>
    )
  }else{
    return (
      <div>
        <Header text='give feedback'/>
        <Button handleClick={() => setGoodValue(good + 1)} text="good" />
        <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBadValue(bad + 1)} text="bad" />
        <Header text='statistics'/>  
        <Statistics good={good} neutral={neutral} bad={bad} avg={avg}/>
      </div>
    )
  }

}

export default App