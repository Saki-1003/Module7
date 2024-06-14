import { useState, useEffect } from "react";
import useFetch from "./Hooks/useFetch";
import { useReducer } from "react";

import { useContext } from "react";
import { EmojiContext } from './Context/EmojiContext'

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];


function BitcoinRates() {

  const [currency, setCurrency] = useState(currencies[0]);
  const [value, setValue] = useState('')
  const data = useFetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
  const {ChangeMood, switchEmoji} = useContext(EmojiContext)
 

  // useEffect(()=>{
    
  //   let ignore = false

  //   fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
  //     .then(response => response.json())
  //     .then(json => {
  //       if(!ignore) {
  //         setValue(json.bitcoin[currency.toLowerCase()])
  //       }
  //       return () => {
  //         ignore = true
  //       }
  //     })     
  //   }, [currency])

  const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

  return (
  <div className="BitcoinRates componentBox">
    {switchEmoji}
    <button onClick={() => ChangeMood()}>Change Mood</button>
    <h3>Bitcoin Exchange Rate: {data && data.bitcoin[currency.toLowerCase()]} </h3>
    <label>Choose currency:
      <select value={currency} onChange={e => setCurrency(e.target.value)}>
      {options}
      </select>
    </label>

  </div>
  )
}


export default BitcoinRates