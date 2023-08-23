import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleEvent={() => setGood(good + 1)} feedback="good" />
      <Button handleEvent={() => setNeutral(neutral + 1)} feedback="neutral" />
      <Button handleEvent={() => setBad(bad + 1)} feedback="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
