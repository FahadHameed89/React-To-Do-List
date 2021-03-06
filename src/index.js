import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDo from './components/ToDo'


ReactDOM.render( 
  <React.StrictMode>
    <h1>React To-Do List</h1>
    <ToDo />
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

