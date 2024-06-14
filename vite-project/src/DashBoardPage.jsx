import { useNavigate, Outlet } from "react-router-dom";
import { useContext } from "react";

export function DashBoardPage() {

  const navigate = useNavigate()

  return(
    <div>
      <h1>Dashboard</h1>
      <Outlet />
      <button onClick={() => navigate('/dash/tasks')}>Show Tasks</button>
      <button onClick={() => navigate('/dash/messages')}>Show Messages</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

// export function DashboardMessages(props) {
//     const { currentUser } = useUserContext();
//     return (
//     <div className="DashboardMessages">
//     <p>Welcome to your dashboard, {currentUser.email}</p>
//     </div>
//     )
// }
export function DashboardTasks(props) {
    const tasks = [
    { id: 1, name: 'Learn React' },
    { id: 2, name: 'Decide on capstone project' },
    { id: 3, name: 'Learn databases' }
    ]
    return (
    <div className="DashboardTasks">
    <ul className="tasks">
    { tasks.map(task => <li key={task.id}>{task.name}</li>) }
    </ul>
    </div>
   )
}