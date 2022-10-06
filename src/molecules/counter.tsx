import React from 'react';
import { useAtom } from 'jotai';
import { countAtom } from '../jotai/atom';

const Counter = () => {
  const [count, setCount] = useAtom<number>(countAtom);

  return (
    <>
      <input type="text" readOnly value={count} />
      <button onClick={setCount}>Count</button>
    </>
  );
};

export default Counter;
