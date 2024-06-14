import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BitcoinRates from './BitcoinRates'
import AppRoute from './AppRoute'
// import NavBar from './NavBar'
import ButtonAppBar from './NavBar'
import { UserProvider } from './Context/UserContext'


function App() {


  return (
    <>
    <UserProvider>
      <ButtonAppBar></ButtonAppBar>
      <AppRoute></AppRoute>
    </UserProvider>

    </>
  )
}

export default App
