import React, { useState } from 'react'
import RightNav from './RightNav'

import { Menu } from '../../styles/components/Nav/Burger'

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Menu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Menu>
      <RightNav open={open} onClick={() => setOpen(!open)}/>
    </>
  )
}

export default Burger
