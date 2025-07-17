import React from 'react'
import NavItems from './NavItems'

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='flex items-center gap-2.5 cursor-pointer'>
        <img src='/images/logo.svg' alt='logo' width={46} height={44} />
      </div>
        <div className='flex items-center gap-8 '>
          <NavItems />
          <button className='btn'>Sign Up</button>
      </div>
      </nav>
  )
}

export default NavBar