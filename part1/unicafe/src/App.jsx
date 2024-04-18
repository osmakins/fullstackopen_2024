/* eslint-disable react/prop-types */
import { useState } from 'react'

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
      <span>good: {good}</span><br/>
      <span>neutral: {neutral}</span><br/>
      <span>bad: {bad}</span><br/>
      <span>average: {average}</span><br/>
      <span>positive: {positives}%</span>
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
