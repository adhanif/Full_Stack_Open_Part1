import React from "react";

export default function Statistics({ good, neutral, bad }) {
  let total = good + neutral + bad;
  return (
    <div>
      {total ? (
        <>
          <h1>Statistics</h1>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {total}</p>
          <p>average {(good - bad) / total}</p>
          <p>positive {(good / total) * 100} %</p>
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
