import React, { useState } from 'react';
import Counter from './Test.tsx';
import Toast from './Toast';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <h1 style={{ color: 'red' }}>{count}</h1>
      <button type="button" onClick={() => { setCount(count + 1); }}>+</button>
      <button type="button" onClick={() => { setCount(count - 1); }}>-</button>
      <h1>I like a cute girl called wyj</h1>
      <Counter />
      <Toast />
    </>
  );
};
