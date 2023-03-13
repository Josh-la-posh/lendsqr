import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBriefcase, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import App from './App';

library.add( faBriefcase, faCoffee )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
