import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-500 rounded px-2 py-4 font-size-500 text-white'>react 2 project</h1>
    <Card username={"Mughees Iqbal"} btnText={"Click me"}/>
    <Card username={"ali ahmad"} btnText={"click me"}/>
    <Card username={"ali"} btnText={"click me"}/>

    </>
  )
}

export default App
