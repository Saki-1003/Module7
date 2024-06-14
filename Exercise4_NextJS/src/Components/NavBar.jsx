'use client'

import Link from "next/link";

export default function NavBar() {

  return(
    <nav>
      <ul>
        <li><Link href='/Login'>Login</Link></li>
        <li><Link href='/Home'>Home</Link></li>
        <li><Link href='/Bitcoin'>Bitcoin</Link></li>
      </ul>
    </nav>
  )
}