import React from 'react'
import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'

import { Container, Navigation, Logo } from '../styles/components/Header'

import Grass from '../assets/grass-1.svg'

const Header = () => {
  return (
    <Container>
      <Navigation>
        <Link href="/">
          <p>Zup Pastagens</p>
        </Link>
        <FiMenu />
      </Navigation>
      <Logo>
        <Grass />
        <h1>Zup Pastagens</h1>
        <h2>Pasto de Alto Rendimento</h2>
      </Logo>
    </Container>
  )
}

export default Header
