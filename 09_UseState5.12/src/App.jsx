import React, { useState } from 'react'

function App() {
let[count,setCount]=  useState(0)
function inc(){
  setCount(perv => perv+1);
}
function Dec(){
  setCount(perv => perv >0 ? perv-1 : 0);
}
  return (
    <div>
      <h1>Count Value : {count}</h1>
      <button onClick={inc}>➕➕</button>
      <button onClick={Dec}>--</button>
    </div>
  )
}

export default App
