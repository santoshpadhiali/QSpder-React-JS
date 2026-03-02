import React from 'react'

function Card(props) {
    console.log(props.user);
    console.log(props.imge);
    
    return (
        <>
            <div className='card'>
                <img src= {props.imge}alt="" />
                <h1 >Hay i am {props.user}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, adipisci?</p>
                <button>View Profile</button>
            </div>
        </>
    )
}

export default Card
