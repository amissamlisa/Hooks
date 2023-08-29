import { useCounter } from 'rooks';
import './App.css';

function App() {
  const { value } = useCounter(99);

  return (
    <>
      <h2>Counter:{value}</h2>
    </>
  );
}

export default App;