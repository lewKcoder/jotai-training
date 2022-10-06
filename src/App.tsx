import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './page/home';
import Counter from './page/counter';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { routerListType } from './type/type';

const routerList: routerListType[] = [
  {
    path: '/counter',
    element: <Counter />,
    linkText: 'Counter',
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to={'/'}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Routes>
          <Route path={'/'} element={<Home routerList={routerList} />} />
          {routerList.map((item) => (
            <Route
              key={item.linkText}
              path={item.path}
              element={item.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
