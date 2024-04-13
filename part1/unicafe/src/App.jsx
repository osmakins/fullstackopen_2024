import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = bad + neutral + good;
  const average = all/3;
  const positives = all ? (good/all) * 100 : 0 // Condition to avoid NaN divide by zero

  return (
    <div className="App">
      <h2>Give Feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>Statistics</h2>
      <span>good: {good}</span><br/>
      <span>neutral: {neutral}</span><br/>
      <span>bad: {bad}</span><br/>
      <span>all: {all}</span><br/>
      <span>average: {average}</span><br/>
      <span>positive: {positives}%</span>
    </div>
  );
}

export default App
