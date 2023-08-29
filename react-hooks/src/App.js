import { useCounter } from 'rooks';
import './App.css';

function App() {
  const { value, increment, decrement } = useCounter(99);

  return (
    <>
      <h2>Count:{value}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;