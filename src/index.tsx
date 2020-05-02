import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Utiliza o react-dom para renderizar a aplicação dentro de um elemento
 * (root)
 * */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
