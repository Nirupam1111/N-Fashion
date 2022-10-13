import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Cursor from './components/Cursor';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Cursor />
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
