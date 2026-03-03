import React from 'react'

function User(props) {
    console.log(props.prop);
    
  return (
    <div>
        <h1 style={{color:"pink"}}>{props}</h1>
    </div>
  )
}

export default User
