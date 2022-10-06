import React from 'react';
import { Link } from 'react-router-dom';
import { routerListType } from '../type/type';

type Props = {
  routerList: routerListType[];
};

const Home: React.FC<Props> = ({ routerList }) => {
  return (
    <div>
      {routerList.map((item) => (
        <p>
          <Link to={item.path}>{item.linkText}</Link>
        </p>
      ))}
    </div>
  );
};

export default Home;
