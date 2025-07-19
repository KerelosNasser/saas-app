'use client'
import React, { useState } from 'react';
import NavItems from './NavItems';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar relative'>
      <div className='flex items-center gap-2.5 cursor-pointer'>
        <Link href='/'>
          <img src='/images/logo.svg' alt='logo' width={46} height={44} />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-8'>
        <NavItems />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-black hover:text-gray-300 focus:outline-none'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white p-4 flex flex-col gap-4 w-full shadow-md'>
          <NavItems mobile />
          <div className='flex flex-col gap-4 mt-4'>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar