import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';

library.add(fab, faCheckSquare, faCoffee)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
