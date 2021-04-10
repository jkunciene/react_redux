import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';

import { Provider } from "react-redux"; //sujungia musu visus reducerius su App komponentu

const store = createStore(
        allReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );


ReactDOM.render(
  <React.StrictMode>
    {/* //dabar musu informacija state tampa globali, pasiekiama visiems komponentams */}
    <Provider store={store}>

         <App />

    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


