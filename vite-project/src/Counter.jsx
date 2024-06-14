import { useState } from "react"
import { useEffect } from "react"

function Counter() {

  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log('useEffect called')
  },[])

  function IncreaseCount() {
    setCount(count+1)
  }

    return(
      <div>
        <div>count: {count}</div>
        <button onClick={IncreaseCount}>Count</button>
      </div>
    )
}

export default Counter