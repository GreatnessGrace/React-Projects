import { useState } from "react";
import "./style.css"

function App() {

  let [counter, setCounter] =  useState(15)
  const [errorMessage, setErrorMessage] = useState("");


  // let counter = 15;

  const increaseValue = () => {
    if(counter < 20) {
      counter = counter+ 1
      setCounter(counter)
      setErrorMessage("");
    }
 else{
  setErrorMessage("Counter's maximum Value is 20");
}

  }

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setErrorMessage("");
    }
    else{
      setErrorMessage("Counter's minimum Value is 0");
    }
  };

  return (
    <>
    <div className="container">
    <h1>Basic of React Hooks</h1>
    <h2>Counter Value: {counter}</h2>
    {errorMessage && <h4>{errorMessage}</h4>}
    <button onClick={increaseValue}>Increase Value {counter}</button>
    <br />
    <button onClick={decreaseValue}>Decrease Value {counter}</button>
    <p>footer: {counter}</p>
    </div>
    </>
  )
}

export default App;
