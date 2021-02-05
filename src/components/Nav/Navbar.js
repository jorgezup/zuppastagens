import React from 'react'
import Link from 'next/link'

import Burger from './Burger'
import { Nav } from '../../styles/components/Nav/Navbar'

const Navbar = () => {
  return (
    <Nav>
      <Link href="/">
        <div className="logo">
          Zup Pastagens
        </div>
      </Link>
      <Burger />
    </Nav>
  )
}

export default Navbar
