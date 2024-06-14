import { NavLink } from "react-router-dom";


export default function NavBar() {
  // const {theme} = useContext(MyThemeContext);

  return (
    <nav className="NavBar">
    <ul className="menu">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/dash">Dashboard</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/posts">Posts</NavLink></li>
    </ul> {/* ++ Add another page with route and component */}
    </nav>
  )
}