/** @format */

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const Header = ({ name }) => <h1>{name}</h1>;

const Content = props => {
  return (
    <>
      <Part part={props.parts[0].name} exercices={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercices={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercices={props.parts[2].exercises} />
    </>
  );
};

const Part = props => {
  return (
    <p>
      {props.part}, {props.exercices} exercices
    </p>
  );
};

const Total = props => {
  const sum =
    parseInt(props.parts[0].exercises) +
    parseInt(props.parts[1].exercises) +
    parseInt(props.parts[2].exercises);
  return <p>Number of exercices: {sum}</p>;
};

ReactDOM.render(<App />, document.getElementById('root'));
