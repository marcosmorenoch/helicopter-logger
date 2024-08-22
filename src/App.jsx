import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/Button'
import Download from './components/Download'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Download/>
    </>

  )
}

export default App
