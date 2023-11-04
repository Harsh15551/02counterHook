import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  
function App() {
  
  let [count, setCount] = useState(0)
  const addValue=()=>{
    console.log("click",count)
    if(count<20)
    {count=count+1
    setCount(count)}
  }

  const removeValue=()=>{
    console.log("click",count)
   
    if(count>0)
    {count=count-1
    setCount(count)}
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>counter value: {count}</h2>
     <button onClick={addValue}
     >Add Value {count}</button>
     <br />
     <button onClick={removeValue}
     >Remove Value {count}</button>
    </>
  )
}

export default App
