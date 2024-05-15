import { useCallback, useState } from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './hooks/useCurrenceyInfo'
import './App.css'

function App() {
 const [amount,SetAmount]=useState(0)
 const [from,SetFrom]=useState("usd")
 const [to,SetTo]=useState( "inr")
 const [convertAmount,SetConvertAmount]=useState(0)
 const currencyInfo=useCurrencyInfo(from)
 const option=Object.keys(useCurrencyInfo)
 const swap=()=>{
  SetFrom(to)
  SetTo(from)
  SetConvertAmount(amount)
  SetAmount(SetConvertAmount)
 }
 const convert=()=>{
  SetConvertAmount(amount * currencyInfo[to])
 }
 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage:""
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={option}
                          onCurrencyChange={(currency)=>SetAmount(amount)}
                          selectcurrency={from}
                          onAmountChange={(amount)=>SetAmount(amount)}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                      
                          amount={convertAmount}
                          currencyOptions={option}
                          onCurrencyChange={(currency)=>SetTo(currency) }
                          selectcurrency={to}
                          amounDisable
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);

}

export default App
