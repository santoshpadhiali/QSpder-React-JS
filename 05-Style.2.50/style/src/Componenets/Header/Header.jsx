import React from 'react'
import headstyle from './Header.module.css'
function Header() {
  return (
    <div className={headstyle.head}>
      <h3>Hay santosh</h3>
      <button className='btn'>Login</button>
    </div>
  )
}

export default Header
