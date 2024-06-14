import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import BitcoinRates from "./BitcoinRates";
import LoginForm from "./LoginForm";
import Home from "./Home";
import PostList from './PostList'

export default function AppRoute() {

  return(
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/Login" element={<LoginForm />}></Route>
      <Route path="/Bitcoin" element={<BitcoinRates />}></Route>
      <Route path="/PostList" element={<PostList />}></Route>
    </Routes>
  )
}
