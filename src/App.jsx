import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("orange")

  return (
    <>
      <div className="w-auto h-screen duration-200  py-1" style={{backgroundColor: color}} >
        <div className='fixed flex flex-wrap justify-center top-2 inset-x-2 px-2 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 bg-red-600 py-1 rounded-xl shadow-xl text-white' onClick={() => setColor('red')}>RED</button>
            <button className='outline-none px-4 bg-blue-600 py-1 rounded-xl shadow-xl text-white' onClick={() => setColor('blue')}>BLUE</button>
            <button className='outline-none px-4 bg-yellow-600 py-1 rounded-xl shadow-xl text-white' onClick={() => setColor('yellow')}>YELLOW</button>
            <button className='outline-none px-4 bg-purple-600 py-1 rounded-xl shadow-xl text-white' onClick={() => setColor('purple')}>PURPLE</button>
            <button className='outline-none px-4 bg-pink-600 py-1 rounded-xl shadow-xl text-white' onClick={() => setColor('green')}>GREEN</button>
            <button className='outline-none px-4 bg-black py-1 rounded-xl shadow-xl  text-white' onClick={() => setColor('black')}>BLACK</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
