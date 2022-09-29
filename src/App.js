import React from 'react';
import './App.css';

import Cards from './component/cards/Cards';
import Header from './component/header and card/Header';

import Que from './component/que and ans/Que';


function App() {

  return (
    <div className="App">
      <Header></Header>
      <Cards></Cards>
      <Que></Que>

    </div>
  );
}

export default App;
