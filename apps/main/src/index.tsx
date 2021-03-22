import React from 'react'
import * as ReactDOM from 'react-dom'
import './setup/theme/reset.css'
import App from './scene/home'
import { reportWebVitals } from './setup/benchmark'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
