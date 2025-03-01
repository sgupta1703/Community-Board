import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Construct from './Components/Construct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h1-container">
        <h1>TOP 10 MUST KNOW PROGRAMMING CONCEPTS</h1>
      </div>
      <Construct />
    </>
  )
}

export default App
