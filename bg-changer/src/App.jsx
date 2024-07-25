
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='full-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button onClick={() => setColor('#f6b092')} className='rounded-full outline-none px-4 py-1 text-white shadow-lg' style={{backgroundColor: '#f6b092'}}>Peach</button>
          <button onClick={() => setColor('Olive')} className='rounded-full outline-none px-4 py-1 text-white shadow-lg' style={{backgroundColor: 'Olive'}}>Olive</button>
          <button onClick={() => setColor('#AEC6CF')} className='rounded-full outline-none px-4 py-1 text-white shadow-lg' style={{backgroundColor: '#AEC6CF'}}>Blue</button>
          <button onClick={() => setColor('#d3ab9e')} className='rounded-full outline-none px-4 py-1 text-white shadow-lg' style={{backgroundColor: '#d3ab9e'}}>Pink</button>
          <button onClick={() => setColor('#d4afb9')} className='rounded-full outline-none px-4 py-1 text-white shadow-lg' style={{backgroundColor: '#d4afb9'}}>Lavender</button>
          <button onClick={() => setColor('#adf7b6')} className='rounded-full outline-none px-4 py-1 text-white shadow-lg' style={{backgroundColor: '#adf7b6'}}>Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
