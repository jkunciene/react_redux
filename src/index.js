import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';

//STORE -> GLOBALIZED STATE
//ACTION tik aparasau veiksmus
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
//REDUCER gauna veiksma is dispatch ir TIKRINA, ka reikia daryti
const counter = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};
let store = createStore(counter);
//Display it in the console
store.subscribe(()=> console.log(store.getState()))
//DISPATCH
store.dispatch(increment());
store.dispatch(decrement());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


