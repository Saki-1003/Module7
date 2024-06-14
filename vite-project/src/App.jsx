import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Clock from './Clock'
import ClockDisplay from './DisplayClock'
import ActivityFinder from './ActivityFinder'
import CounterDisplay from './CounterDisplay'
import VideoPlayer from './VideoPlayer'
import ReducerCounter from './ReducerCounter'
import PostListReducer from './PostListReducer'
import SubscribeForm from './SubscribeForm'
import { UserProvider } from './Context/UserProvider'
import NavBar from './NavBar'
import { AppRoutes } from './AppRoutes'
// import PostsPage from './PostPage'
import MUISample from './MUISample'
import { ThemeProvider } from '@mui/material'
import { tealTheme } from './Theme/tealTheme'


function App() {


  return (
    <>
    <tealTheme>
    <MUISample></MUISample>
    <NavBar></NavBar>
    <AppRoutes></AppRoutes>
    </tealTheme>
    {/* <UserProvider>
      <ActivityFinder></ActivityFinder>
      <SubscribeForm></SubscribeForm>
    </UserProvider> */}

    {/*<PostListReducer></PostListReducer>
    <ReducerCounter></ReducerCounter> */}
    {/* <VideoPlayer></VideoPlayer>
    <CounterDisplay></CounterDisplay>
      <ActivityFinder></ActivityFinder>
      <Counter></Counter>
      {/* <Clock></Clock> */}
      {/* <ClockDisplay></ClockDisplay> */}



    </>
  )
}

export default App
