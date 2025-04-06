import { useState, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from 'src/store';
import { increment, decrement } from 'src/store/slices/counterSlice';
import MyButton from 'src/components/MyButton';
import formatDate from 'src/utils/formatDate';
import './App.scss';

const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [now] = useState(new Date());
  const storeCount = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => setCount(c => c + 1);

  const handleComponentButtonClick = () => alert('Clicked!');

  return (
    <div className="app">
      <h1>Hello, React + TypeScript + SCSS</h1>
      <button onClick={handleButtonClick}>Clicked {count} times</button>
      <p>Today is {formatDate(now)}</p>
      <MyButton label="Click me" onClick={handleComponentButtonClick} />
      <br />
      <br />
      <h2>Redux store with Toolkit actions</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      {storeCount}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default App;
