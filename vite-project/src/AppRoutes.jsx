import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Contact from "./Contact";
import { Home } from "./Home";
import { DashBoardPage } from "./DashBoardPage";
// import {DashboardMessages} from "./DashBoardPage"
import {DashboardTasks} from "./DashBoardPage"

export function AppRoutes(props) {

  return(
    <Routes>
      <Route index element={<Home {...props}></Home>}></Route>
      <Route path='/Contact' element={<Contact></Contact>}></Route>
      <Route path="*" element={<Home></Home>}></Route> {/* if nothing matches, go to Home. */}
      <Route path='/dash' element={<DashBoardPage {...props}></DashBoardPage>}>
        <Route path='/dash/tasks' element={<DashboardTasks></DashboardTasks>}></Route>
        {/* <Route path='/messages' element={<DashboardMessages></DashboardMessages>}></Route> */}
      </Route>
      {/* <Route path='/posts' element={<PostsPage {...props} />} >
        <Route index element={<PostList />} />
        <Route path=":id" element={<Post />} />
      </Route> */}
    </Routes>
  
  )
}