import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import PlansContext from 'context/planContext'

import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <PlansContext> */}
      <App />
      {/* </PlansContext> */}
    </React.StrictMode>
  </BrowserRouter>
)

reportWebVitals()
