import React from 'react';
import FormToShow from './components/Form';
import './App.css';
import {SignupForm} from './components/Form2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormToShow/>
        <SignupForm/>
      </header>
    </div>
  );
}

export default App;
