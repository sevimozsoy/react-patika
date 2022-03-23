import { useState } from 'react'

function RepCounter() {
    const[repCounter, setRepCounter] = useState(0);

    const minusRep = () => {
        setRepCounter(repCounter - 1)
    };

    const addRep = () => {
        setRepCounter(repCounter + 1)
    };
  return (
    
    

    <div>
    <h3>Your Current Rep is: {repCounter}</h3>
      <button onClick={addRep}>+rep u good boi</button>
      <button disabled={repCounter === 0} onClick={minusRep}>-rep r u putin or somthn</button>
      <button onClick={() => setRepCounter(0)}>Clear</button>
    </div>
  );
}

export default RepCounter;
