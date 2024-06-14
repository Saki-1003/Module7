import { useState, useEffect } from "react";
import useFetch from "./Hooks/useFetch";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];


function BitcoinRates() {

  const {userDetail, handleUpdateUser} = useContext(UserContext)

  const [currency, setCurrency] = useState(currencies[0]);
  const [value, setValue] = useState('')

  const data = useFetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)

  // const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

  // if(userDetail.name && userDetail.email) {

  // } else {
  //   return(
  //   <>
  //     <p>Please Log in!</p> 
  //   </>)
  // }

  return (
    <div className="BitcoinRates componentBox">
      <h3>
        Bitcoin Exchange Rate: {data && data.bitcoin[currency.toLowerCase()]}{" "}
      </h3>

      {/* <label>Choose currency:
      <select value={currency} onChange={e => setCurrency(e.target.value)}>
      {options}
      </select>
    </label><br />
    <div>*/}

      <div>{`currency: ${currency !== null ? `'${currency}'` : "null"}`}</div>
      <br />
      <Autocomplete
        value={currency}
        onChange={(event, newCurrency) => {
          setCurrency(newCurrency);
        }}
        inputValue={value}
        onInputChange={(event, newValue) => {
          setValue(newValue);
        }}
        id="controllable-states-demo"
        options={currencies}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Currency" />}
      />
    </div>
  );
}


export default BitcoinRates