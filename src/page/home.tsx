import React from 'react';
import Counter from './counter';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to={'/counter'}>counter</Link>
    </div>
  );
};

export default Home;
