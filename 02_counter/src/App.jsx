import { useState } from 'react'


const App = () => {

let [counter, setCounter] = useState(15) // useState hook is used to update the 
// UI in alll the tage/Places where we have used.

  // let counter = 5

  const addValue= ()=>{
    if(counter < 20){
          setCounter(counter + 1);
    }

    // console.log("value added", Math.random());
    // counter += 1;
    // console.log("clicked",Math.random())
    console.log("clicked",counter)
  }

  const removeValue = ()=>{
    if(counter > 0){
    setCounter(counter - 1);
    }else{
      setCounter(counter)
    }
  }

  return (
    <div>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </div>
  )
}

export default App