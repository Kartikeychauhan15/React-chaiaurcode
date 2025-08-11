import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={()=>setColor("red")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "Blue"}}>Blue</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={()=>setColor("orange")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "Orange"}}>Orange</button>
          <button onClick={()=>setColor("white")} className='outline-none px-4 rounded-full text-black shadow-lg' style={{backgroundColor: "White"}}>White</button>
          <button onClick={()=>setColor("black")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "Black"}}>Black</button>
          <button onClick={()=>setColor("pink")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "Pink"}}>Pink</button>
          <button onClick={()=>setColor("brown")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "Brown"}}>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App