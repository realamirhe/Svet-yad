import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import './setup/theme/reset.css'
import Home from './scene/home'
import { reportWebVitals } from './setup/benchmark'

ReactDOM.render(
  <StrictMode>
    <Home />
  </StrictMode>,
  document.getElementById('root'),
)

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
