import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addVal = () => {
    if(count<20){
      setCount(count+1)
    }
    
  };
  const removeVal = () => {
    if(count>0){
      setCount(count-1)
    }
    
  };
  return (
    <>
     <div className="container">
      <h1>React project 👻🍉👻</h1>
      <h2>counter project {count}</h2>
      <h5>my first react project</h5>
      <button onClick={addVal}>Add count</button>
      <button onClick={removeVal}>Remove count</button>
      <h6>Value of Counter is {count}</h6>
     </div>
    </>
  )
}

export default App
