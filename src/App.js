import './App.css';
import React from 'react';
import {
  MemoryRouter, Route, Routes,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import RandomQuote from './components/RandomQuote';

function App() {
  return (
    <MemoryRouter>
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Quote" element={<RandomQuote />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </main>
    </MemoryRouter>
  );
}

export default App;
