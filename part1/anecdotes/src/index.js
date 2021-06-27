/** @format */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(10).fill(0));
  let max = Math.max(...points);
  let position = points.indexOf(max);

  const generateRandomNumber = () => {
    let max = 9;
    let min = 1;
    let randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    setSelected(randomNumber);
  };

  const updateVotes = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h4>{anecdotes[selected]}</h4>
      <p>Has {points[selected]} votes</p>
      <p>
        <button onClick={updateVotes}>Vote</button>
        <button onClick={generateRandomNumber}>Next Anecdote</button>
      </p>
      <h1>Anecdote with most votes</h1>
      <h4>{anecdotes[position]}</h4>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'The best way to get a project done faster is to start sooner',
  'How does a project get to be a year late?...One day at a time',
  'Every good work of software starts by scratching a developers personal itch',
  'Prolific programmers contribute to certain disaster'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
