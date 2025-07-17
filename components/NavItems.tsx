import Link from 'next/link'
import React from 'react'


const navItems = [
  {label: 'home', href: '/'},
  {label: 'Companions', href: '/companions'},
  {label: 'My Journey', href: '/my-journey'},
]

function NavItems() {
  return (
    <nav>
      <div className='flex items-center gap-8 '>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </div>
    </nav>
  )
}

export default NavItems