/** @format */

import React from 'react';
import ReactDOM from 'react-dom';

const Hello = props => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = 'Aoife';
  const age = 17;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Roberto Redondo" age={30 + 17} />
      <Hello name="Karla" age="51" />
      <Hello name={name} age={age} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
