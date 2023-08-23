import { useState } from "react";
import "./App.css";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  let min = 0;
  let max = anecdotes.length - 1;
  const handleClick = () => {
    setSelected(Math.floor(Math.random() * (max - min + 1) + min));
  };

  const handleVote = () => {
    const updatedVotes = { ...votes };
    !updatedVotes[selected]
      ? (updatedVotes[selected] = 1)
      : updatedVotes[selected]++;
    setVotes(updatedVotes);
  };

  let maxVotes = 0;
  let maxKey = 0;
  for (let key in votes) {
    if (votes[key]) {
      if (votes[key] > maxVotes) {
        maxKey = key;
        maxVotes = votes[key];
      }
    }
  }

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected] ? votes[selected] : 0} votes</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>next anecdote </button>
      </div>
      <div>
        <h1>Anecdote with the most votes</h1>
        <p>
          {anecdotes[maxKey]} <br />
          has {maxVotes} votes
        </p>
      </div>
    </>
  );
}

export default App;
