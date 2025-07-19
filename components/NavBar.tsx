import React from 'react'
import NavItems from './NavItems'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='flex items-center gap-2.5 cursor-pointer'>
        <img src='/images/logo.svg' alt='logo' width={46} height={44} />
      </div>
        <div className='flex items-center gap-8 '>
          <NavItems />
          <SignedOut>
            <SignInButton>
              <button className='btn-signin'>Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </div>
      </nav>
  )
}

export default NavBar