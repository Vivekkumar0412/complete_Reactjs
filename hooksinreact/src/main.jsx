import React from 'react'
import ReactDOM from 'react-dom/client'
import Appp from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appp />
    <Card/>

  </React.StrictMode>,
)
