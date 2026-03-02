import React from 'react'
import Card from './Componet/Card'

function App() {
  return (
   <div className='App-parant'>
    <Card user="Sonom" imge="https://images.unsplash.com/photo-1770954179366-7a85687c1b64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Card user ="Hira" imge = "https://plus.unsplash.com/premium_photo-1771950997890-29215fb39fb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   </div>
  )
}

export default App
