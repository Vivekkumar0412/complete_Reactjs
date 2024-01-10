import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("olive")
  function redBtn(){
    setColor(color = "red")
  }
  function orangeBtn(){
    setColor(color = "orange")
  }
  function blackBtn(){
    setColor(color = "black")
  }
  function cyanBtn(){
    setColor(color = "cyan")
  }
  return (
    <div className='v' style={{backgroundColor : color}}>
      <button style={{backgroundColor : "red" }}
      onClick = {redBtn} className='btn'>RED</button>
      <button style={{backgroundColor : "black" }}
      onClick = {blackBtn} className='btn'>BLACK</button>
      <button style={{backgroundColor : "orange" }}
       onClick = {orangeBtn}className='btn'>ORANGE</button>
      <button style={{backgroundColor : "cyan" }}
      onClick = {cyanBtn}className='btn'>CYAN</button>
      <button style={{backgroundColor : "green" }}
      onClick = {()=> setColor("green") } className='btn'>GREEN</button>
    </div>
  )
}

export default App
