'use client'
import { useRouter } from "next/navigation";

export default function CurrencyDropdown() {

  const router = useRouter()
  const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
  const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

  function changeCurrency(e){
    e.preventDefault()
    router.replace('/Bitcoin?currency=' + e.target.value)
  }

  return (
  <div className="BitcoinRates componentBox">
    
    <label>Choose currency:
      <select onChange={changeCurrency}>
      {options}
      </select>
    </label><br />

  </div>
  )
}