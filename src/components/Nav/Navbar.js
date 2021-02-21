import React, { useState } from 'react'
import Link from 'next/link'

import RightNav from './RightNav'
import Burger from './Burger'
import { Nav } from '../../styles/components/Nav/Navbar'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Nav>
      <div className="wrapper">
        <Link href="/">
          <div className="logo">
            Zup Pastagens
            </div>
        </Link>
        <RightNav open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />

      </div>
    </Nav>
  )
}

export default Navbar
