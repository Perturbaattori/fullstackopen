import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  const all = props.good+props.bad+props.neutral || 0
  const average = (props.good-props.bad)/(all) || 0
  const positive = props.good/all*100 +" %" || 0

  if (all === 0) {
    return (
      <div>
        give some feedback!
      </div>
    )
  }

  return ( 
    <div>
      <table>
        <tbody>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive" value ={positive} />
      </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
      <tr>
      <td>{props.text}</td><td> {props.value}</td>
      </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button 
      handleClick={() => setGood(good+1)}
      text='good'
      />
            <Button 
      handleClick={() => setNeutral(neutral+1)}
      text='neutral'
      />
            <Button 
      handleClick={() => setBad(bad+1)}
      text='bad'
      />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App