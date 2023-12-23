import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(prop) {
  const [count, setCount] = useState(0)
  function addNum(){
    setCount(count + 1);
  }
  function decNum(){
    setCount(count -1)
  }

  return(
    <>
    <h1>Hi there {prop.ame}{count}</h1>
    <button onClick = {addNum}>ADD</button>
    <button onClick = {decNum}>ADD</button>
    </>
  )
}

export default App
