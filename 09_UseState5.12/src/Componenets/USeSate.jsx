import React from 'react'
import { useState } from 'react'

function USeSate() {
        const [Name, setName] = useState("santosh")
        const [num, setnum] = useState(10)
        function changenumb(){
            setName("Sonom")
            setnum('62')
        }
  return (
    <>
    <h1>the number value is {num} <br />
    the name is  {Name}</h1>
    <button onClick={changenumb}>Click Me</button>
    </>
  )
}

export default USeSate
