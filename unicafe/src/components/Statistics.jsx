import React from "react";

export default function Statistics({ good, neutral, bad }) {
  let total = good + neutral + bad;
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {total && (good - bad) / total}</p>
      <p>positive {total && (good / total) * 100} %</p>
    </div>
  );
}
