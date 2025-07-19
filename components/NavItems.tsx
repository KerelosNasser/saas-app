import Link from 'next/link'
import React from 'react'


const navItems = [
  {label: 'home', href: '/'},
  {label: 'Companions', href: '/companions'},
  {label: 'My Journey', href: '/my-journey'},
  {label: 'Subscription', href: '/subscription'},
]

function NavItems({mobile}: {mobile?: boolean}) {
  return (
    <nav>
      <div className={mobile ? 'flex flex-col gap-4 text-lg font-bold' : 'flex items-center gap-5 text-lg font-bold '}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </div>
    </nav>
  )
}

export default NavItems