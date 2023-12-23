import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
let ar = ["vivek"]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App ame = {ar[0]}/>
  </React.StrictMode>,
)
