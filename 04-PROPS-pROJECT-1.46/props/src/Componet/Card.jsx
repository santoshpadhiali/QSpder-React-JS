import React from 'react'
import{ Bookmark} from 'lucide-react'
function Card(prop) {
  
  
  return (
    <div className="card">
      <div className="top">
        <div className="logo">
          <img src={prop.logo} alt="" />
        </div>
        <button>Save <Bookmark /></button>
      </div>

      <div className="mid">
        <strong>{prop.bname}</strong>
        <span>{prop.days}</span>
        <p>{prop.pos}</p>
        <button>{prop.tag1}</button>
        <button>{prop.tag2}</button>
      </div>

      <div className="bottom">
        <div>
          <h4>{prop.money}</h4>
          <span>{prop.loc}</span>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  )
}

export default Card
