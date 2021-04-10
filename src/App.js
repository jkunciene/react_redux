import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();


  return (
    <div>
     <h1>Redux - state management</h1>
     <p>Counter {counter}</p>

     <button onClick={() => dispatch(increment(5))}>+5</button>
     <button onClick={() => dispatch(decrement())}>-</button>
     {isLogged ? <h4>Valuable Information I shouldn't see</h4> : false}
    </div>
  );
}

export default App;
