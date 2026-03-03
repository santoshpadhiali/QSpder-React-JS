import React from 'react'
import Card from './Componet/Card'
import User from './Componet/User'
import jobOpenings from './Componet/Data.js'
function App() {



  return (
    <div className='parant'>
    
      {jobOpenings.map(function(val,idx){
        return <div  key={idx} >

          <Card logo={val.brandLogo} bname={val.companyName} days={val.datePosted} pos={val.post} money={val.pay} tag1={val.tag1} tag2={val.tag2} loc={val.loc}  />
        </div>
        
        
      })}
    
    </div>
  )
}

export default App
