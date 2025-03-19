import React, { useId } from "react";
import '../App.css'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions =[],
    selectCurrency ="usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amounInputId=useId()

    return(
        <div className={`${className}`}>
                <label htmlFor={amounInputId} className="text-white/40 mb-2 inline-block">{label}</label>

                <input 
                    id={amounInputId} 
                    className="outline-none text-white w-full bg-transparent py-1.5" 
                    type="number" 
                    placeholder="amount" 
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>{
                      onAmountChange && onAmountChange(Number(e.target.value))
                     }}
                />

                <p className="text-white/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
        </div>
    )
}

export default InputBox;