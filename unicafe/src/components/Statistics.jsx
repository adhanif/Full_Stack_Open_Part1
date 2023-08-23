import React from "react";
import StatisticLine from "./StatisticLine";

export default function Statistics({ good, neutral, bad }) {
  let total = good + neutral + bad;
  let average = (good - bad) / total;
  let positive = (good / total) * 100;
  return (
    <div>
      {total ? (
        <>
          <h1>Statistics</h1>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positive} %`} />
          {/* <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {total}</p>
          <p>average {}</p>
          <p>positive {} %</p> */}
        </>
      ) : (
        <>
          <h1>Statistics</h1>
          <p>No feedback given</p>
        </>
      )}
    </div>
  );
}
