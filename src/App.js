import './App.css';
import React from 'react';
import Calculator from './components/Calculator';
import RandomQuote from './components/RandomQuote';

function App() {
  return (
    <>
      <main className="main">
        <RandomQuote />
        <Calculator />
      </main>
    </>
  );
}

export default App;
