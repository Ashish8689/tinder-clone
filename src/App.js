import React from 'react';
import './App.css';
import Cards from './Component/Cards';
import Header from './Component/Header';
import SwipeButtons from './Component/SwipeButtons';

function App() {
  return (
    <div className="component">
        <Header/>
        <Cards/>  
        <SwipeButtons/>
    </div>
  );
}

export default App;
