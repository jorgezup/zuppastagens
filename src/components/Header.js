import React from 'react'
import { FiMenu, FiChevronsDown } from 'react-icons/fi'
import Link from 'next/link'

import { Container, Navigation, Logo } from '../styles/components/Header'

import Grass from '../assets/grass-1.svg'

const Header = () => {
  function scrollToSection () {
    document.querySelector('#kurumi').scrollIntoView({
      behavior: 'smooth'
    })
  }

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
      <FiChevronsDown
      style={{
        width: '36px',
        height: '36px',
        position: 'absolute',
        bottom: 20,
        color: '#e1e1e6'
      }}
      onClick={scrollToSection}
      />
    </Container>
  )
}

export default Header
