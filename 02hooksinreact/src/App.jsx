import { useState } from 'react'
import './App.css'

function App(prop) {
  const [count, setCount] = useState(0)
  function addNum(){
    setCount(count + 1);
    // setCount(count + 1);
    
  }
  function decNum(){
    if(count>0){

      setCount(count -1)
    }else{
      alert("CAN,T DECREASE")
    }
  }

  return(
    <>
    <h1>Hi there {prop.ame} {count}</h1>
    <button onClick = {addNum}>ADD</button>
    <button onClick = {decNum}>DEc</button>
    </>
  )
}

export default App
