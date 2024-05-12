import { useState } from 'react'
import './App.css'
function App() {
  
const [color,setColor]=useState("yellow")
  return (
    <div className="w-full min-h-screen flex item-center justify-center"
    style={{backgroundColor:color}}>
       <h1 className=' text-black text-center text-4xl font-bold py-8'>Background Color Change</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-14 shadow-lg bg-white rounded px-3
        py-2'>
          <button onClick={()=>setColor("red")} className='bg-red outline-none px-4 py-1 rounded text-white' style={{backgroundColor:"red"}}>Red</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded px-3
        py-2'>
          <button onClick={()=>setColor("green")} className='bg-red outline-none px-4 py-1 rounded text-white' style={{backgroundColor:"green"}}>Green</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded px-3
        py-2'>
          <button onClick={()=>setColor("pink")} className='bg-red outline-none px-4 py-1 rounded text-white' style={{backgroundColor:"pink"}}>Pink</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded px-3
        py-2'>
          <button onClick={()=>setColor("yellow")} className='bg-red outline-none px-4 py-1 rounded text-white' style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded px-3
        py-2'>
          <button onClick={()=>setColor("green")} className='bg-red outline-none px-4 py-1 rounded text-white' style={{backgroundColor:"green"}}>Green</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded px-3
        py-2'>
          <button onClick={()=>setColor("blue")} className='bg-red outline-none px-4 py-1 rounded text-white' style={{backgroundColor:"blue"}}>Blue</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded px-3
        py-2'>
          <button onClick={()=>setColor("grey")} className='bg-red outline-none px-4 py-1 rounded text-white' style={{backgroundColor:"grey"}}>Grey</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded px-3
        py-2'>
          <button onClick={()=>setColor("brown")} className='bg-red outline-none px-4 py-1 rounded text-white' style={{backgroundColor:"brown"}}>Brown</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded px-3
        py-2'>
          <button onClick={()=>setColor("orange")} className='bg-red outline-none px-4 py-1 rounded text-white' style={{backgroundColor:"orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
