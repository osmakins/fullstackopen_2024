/* eslint-disable react/prop-types */
import { useState } from 'react'

const StatisticLine = ({label,  value}) =>{

  return(
    <div>
      <span>{label}: {value}</span><br/>
    </div>
  )
}

const Statistics = ({bad, neutral, good}) => {

  const all = bad + neutral + good;
  const average = all/3;
  const positives = (good/all) * 100

  if(bad === 0 && neutral === 0 && good === 0){
    return(
      <div>No feedback given</div>
    )
  }

  return(
    <div>
      <StatisticLine label="good" value={good}/>
      <StatisticLine label="neutral" value={neutral}/>
      <StatisticLine label="bad" value={bad}/>
      <StatisticLine label="average" value={average}/>
      <StatisticLine label="positive" value={positives}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className="App">
      <h2>Give Feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App
