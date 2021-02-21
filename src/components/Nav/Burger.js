/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

import { Menu } from '../../styles/components/Nav/Burger'

const Burger = ({ open, setOpen }) => {
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  return (
    <>
      <Menu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Menu>
    </>
  )
}

export default Burger
