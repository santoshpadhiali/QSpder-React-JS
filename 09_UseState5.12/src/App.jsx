import React, { useState } from 'react'
import USeSate from './Componenets/USeSate';

function App() {
let[count,setCount]=  useState(0)
function inc(){
  setCount(perv => perv+1);
}
function Dec(){
  setCount(perv => perv >0 ? perv-1 : 0);
}
function inc5(){
  setCount(perv => perv+5);
}
  return (
    <div>
      <USeSate/>
      <h1>Count Value : {count}</h1>
      <button onClick={inc}>➕➕</button>
      <button onClick={Dec}>➖➖</button>
      <button onClick={inc5}>inc 5</button>
    </div>
  )
}

export default App
