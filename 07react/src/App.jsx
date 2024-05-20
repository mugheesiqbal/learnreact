import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Component/ThemeBtn'
import Card from './Component/Card'

function App() {
  const [themMode,setThemeMode]=useState("light")
  const darkThem=()=>{
   setThemeMode("dark")
  }
  const lightTheme=()=>{
    setThemeMode("light")
   }
   useEffect(() => {
    document.querySelector("html").classList.remove("dark","light")
    document.querySelector("html").classList.add(themMode)
   }, [themMode])

  return (
    <ThemeProvider value={{themMode,darkThem,lightTheme}}>
     <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
