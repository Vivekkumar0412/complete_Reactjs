import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(10)
  function addNum(){
    setCount((pc)=> {return (pc + 1)})
    setCount((pc)=> {return (pc + 1)})
    setCount((pc)=> {return (pc + 1)})
    setCount((pc)=> {return (pc + 1)})
    

  }
  function decNum(){
    setCount(count - 1)
  }
  return (
    <>
      <h1>THE cureent count is   {count}</h1>
      <button onClick={addNum}>ADD</button>
      <button onClick={decNum}>DEC</button>
    </>
  )
}

export default App
