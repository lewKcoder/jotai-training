import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './page/home';
import Counter from './page/counter';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to={'/'}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/counter'} element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
