import { useState, FC } from 'react';
import MyButton from '@components/MyButton';
import formatDate from '@utils/formatDate';
import './App.scss';

const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [now] = useState(new Date());

  const handleButtonClick = () => setCount(c => c + 1);

  const handleComponentButtonClick = () => alert('Clicked!');

  return (
    <div className="app">
      <h1>Hello, React + TypeScript + SCSS</h1>
      <button onClick={handleButtonClick}>Clicked {count} times</button>
      <p>Today is {formatDate(now)}</p>
      <MyButton label="Click me" onClick={handleComponentButtonClick} />
    </div>
  );
};

export default App;
