import CurrencyDropdown from "@/Components/CurrencyDropdown"


export default async function BitCoin({searchParams}) {

  const currency = searchParams.currency || 'USD'
  const data = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
  const currencyData = await data.json()

  return (
  <div className="BitcoinRates componentBox">

    <h3>Bitcoin Exchange Rate: {currencyData.bitcoin[currency.toLowerCase()]} </h3>
    <CurrencyDropdown></CurrencyDropdown>

  </div>
  )
}
  
