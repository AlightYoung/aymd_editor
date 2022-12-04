import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './component/app'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App hint="write your markdown here" />
  </React.StrictMode>
)
