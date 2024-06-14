import { useState, useEffect } from "react";
import { useData } from "./Hooks/useData";

import { useContext } from "react";
import { UserContext } from "./Context/UserProvider";


function ActivityFinder() { 
  const [participants, setParticipants] = useState(1);
  const {currentUser, handleUpdateUser} = useContext(UserContext)
  // const [activity, setActivity] = useState('');

  const data = useData('https://fakestoreapi.com/products/' + participants);
  const activity = data ? data.category : 'not found';

  if(currentUser) {
    //do nothing
  } else {
    return (<> </>)
  }

  // useEffect(() => {
  //   let ignore = false
  //   fetch('https://fakestoreapi.com/products/' + participants)
  //   .then(response => response.json())
  //   .then(json => {
  //     if(!ignore) {
  //       setActivity(json.category)
  //     }
  //     return () => {
  //       ignore = true
  //     }
  //   });
  // }, [participants]);

  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>Choose number of participants:
        <select value={participants} onChange={e => setParticipants(e.target.value)}>
          <option>1</option>
          <option>6</option>
          <option>9</option>
        </select>
      </label>
      <div><strong>Suggested Category: </strong>{activity}</div>
    </div>
  )
}

export default ActivityFinder