import { useState } from 'react'
import './App.css'

import Home from '../src/pages/home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Home/>
    </div>
  )
}

export default App
