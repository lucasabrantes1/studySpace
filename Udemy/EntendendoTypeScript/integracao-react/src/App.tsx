import React, {Component} from 'react';
import './App.css';
import ContadorValor from './components/ContadorValor';


function App() {
  return (
    <div className="App">
      <ContadorValor contador={111}/>
    </div>
  );
}

export default App;
