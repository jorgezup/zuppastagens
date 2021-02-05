/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Ul } from '../../styles/components/Nav/RightNav'

const RightNav = ({ open, onClick }) => {
  const router = useRouter()

  return (
    <Ul open={open} >
      <li onClick={() => onClick()}>
        <Link href="/kurumi">
          <a className={router.pathname === '/kurumi' ? 'active' : ''}>Capim BRS - Kurumi</a>
        </Link>
      </li>
      <li onClick={() => onClick()}>
        <Link href="/capiacu">
          <a className={router.pathname === '/capiacu' ? 'active' : ''}>Capim BRS - Capiaçu</a>
        </Link>
      </li>
      <li onClick={() => onClick()}>
        <Link href="/#quem-somos" >
          <a className={router.pathname === '/#quem-somos' ? 'active' : ''}>Quem somos</a>
        </Link>
      </li>
      <li onClick={() => onClick()}>
        <Link href="/#contato">
          <a className={router.pathname === '/#contato' ? 'active' : ''}>Contato</a>
        </Link>
      </li>
    </Ul>
  )
}

export default RightNav
