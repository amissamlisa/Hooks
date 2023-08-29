import { useCallback, useState } from "react";

type CounterHandler = {
  decrement: () => void;
  decrementBy: (amount: number) => void;
  increment: () => void;
  incrementBy: (amount: number) => void;
  reset: () => void;
  value: number;
};

function useCounter(initialValue: number): CounterHandler {
  const [counter, setCounter] = useState(initialValue);

  const incrementBy = useCallback((incrAmount: number) => {
    setCounter((currentCounter) => currentCounter + incrAmount);
  }, []);

  const decrementBy = useCallback(
    (decrAmount: number) => {
      incrementBy(-decrAmount);
    },
    [incrementBy]
  );

  const increment = useCallback(() => {
    incrementBy(1);
  }, [incrementBy]);

  const decrement = useCallback(() => {
    incrementBy(-1);
  }, [incrementBy]);

  const reset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return {
    decrement,
    decrementBy,
    increment,
    incrementBy,
    reset,
    value: counter,
  };
}

export { useCounter };