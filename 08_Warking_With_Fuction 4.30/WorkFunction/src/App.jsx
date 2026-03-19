import React from 'react'

function App() {
  function handleClick(e) {
    console.log();
  }
  function scroll(e){
    console.log(e.deltaY);
    
  }
  return (
    <div>

      {/* <button onClick={handleClick}> btnClick</button>

      <input type="text"  placeholder='type somethiong' onChange={function(e){
        console.log(e.target.value);
        
      }}/> */}
      <div className="par" onWheel={scroll}>

        <div className="page-1">hay</div>
        <div className="page-2">love</div>
        <div className="page-3">how </div>

      </div>
    </div>
  )
}

export default App
