import React from 'react'

function App() {
  function handleClick(){
    console.log('btn is clicked ');
  }
  return (
    <div>
      <button onClick={handleClick}> btnClick</button>

      <input type="text"  placeholder='type somethiong' onChange={function(e){
        console.log(e.target.value);
        
      }}/>
    </div>
  )
}

export default App
