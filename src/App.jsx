import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount,setAmount]=useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState
  (0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div className='App overflow-hidden flex rounded-lg flex-col p-2 bg-black/40 '>
        <form onSubmit={(e)=>{
          e.preventDefault();
          convert()
        }}>
          <InputBox 
            className='curr-1'
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=> setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount)=> setAmount(amount)}
          />

          <button 
            className='swap text-white'
            onClick={swap}
          >swap</button>


          <InputBox 
            className='curr-1'
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=> setTo(currency)}
            selectCurrency={to}
            amountDisable
          />


          <button className='btn text-white'
          >Convert {from.toUpperCase() +" to "+to.toUpperCase() }</button>
      </form>
      </div>
    </>
  )
}

export default App
