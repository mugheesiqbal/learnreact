import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() { 
  const [numberAllowed,SetNumberAllowed]=useState(false)
  const [charAllowed,SetCharAllowed]=useState(false)
  const [length,SetLength]=useState(8)
  const [password,SetPassword]=useState("")
 
  const passwordGeneratore=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)
     str +="0123456789"
     if(charAllowed)
      str +="@#$&*(){}[]~!%^-+`"
    for(let i=1; i<=length;i++){
      let char=Math.floor(Math.random() * str.length+1)
      pass +=str.charAt(char)
    }
    SetPassword(pass)
  },[numberAllowed,charAllowed,length,SetPassword])
  
  useEffect(()=>{passwordGeneratore()},[numberAllowed,length,charAllowed,passwordGeneratore])
  const passwordRef=useRef(null)
  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
  window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md  rounded-lg px-4 my-8 py-2 text-black bg-yellow-600 text-center'>
  <h1 className='text-center text-black '>Password Generator</h1>
  <div className='flex shadow-md rounded-lg overflow-hidden mb-4 bg-blue-900 my-8  text-white'>
 
  <input type="text" value={password} className='outline-none border-none w-full py-1 px-3 text-black' placeholder='password' readOnly ref={passwordRef}/>
  <button onClick={copyPasswordToClipBoard} className='rounded-xl px-3 shrink-0'>copy</button>
  </div>
<div className='flex text-sm gap-x-2 '>
<div className='flex items-center gap-x-2 '> 
<input type="range" min={6} max={100} value={length} className='cursor-pointer'
onChange={(e)=>{SetLength(e.target.value)}}/>
<label htmlFor="">Length: {length} </label>
</div>
<div className='flex items-center gap-x-1'>
  <input type="checkbox"
  value={numberAllowed}
  defaultChecked={numberAllowed}
  id='numberInput'
  onChange={()=>{
    SetNumberAllowed((prev)=>{
      !prev
    })
  }}
   />
   <label htmlFor="numberInput">Number</label>
</div>

<div className='flex items-center gap-x-1'>
  <input type="checkbox"
  defaultChecked={charAllowed}
  value={charAllowed}
  id='charInput'
  onChange={()=>{
    SetCharAllowed((prev)=>{
      !prev
    })
  }}
   />
   <label htmlFor="charInput">Chracter</label>
</div>
</div>
</div>
    </>
  )
}

export default App
