import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {EmojiProvider} from './Context/EmojiContext'
import BitcoinRates from './BitcoinRates'



function App() {

  return (
    <>
      <EmojiProvider>  
        <BitcoinRates></BitcoinRates>
      </EmojiProvider>
    </>
  )
}

export default App
