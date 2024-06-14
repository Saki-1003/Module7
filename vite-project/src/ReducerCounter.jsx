import { useReducer } from "react";


function ReducerCounter() {

  const [counter, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
  <div className="ReducerCounter componentBox">
    <h2>Count: {counter}</h2>
    <button onClick={handleIncrement}>Reducer Increment</button>
    <button onClick={handleDecrement}>Reducer Decrement</button>
  </div>
  );
}
  
const reducer = (counter, action) => {
  switch (action.type) { // switch statements are common in reducers
    case "increment":
    return counter + 1;
    case "decrement":
    return counter - 1;
    default:
    return state;
  }
};


  export default ReducerCounter;