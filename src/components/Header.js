/* eslint-disable space-before-function-paren */
import React from 'react'
import { FiChevronsDown } from 'react-icons/fi'

import { Container, Logo } from '../styles/components/Header'
import Grass from '../assets/grass-1.svg'

const Header = () => {
  function scrollToSection() {
    document.querySelector('#kurumi').scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      <Logo>
        <Grass />
        <h1>Zup Pastagens</h1>
        <h2>Pasto de Alto Rendimento</h2>
      </Logo>
      <div className="iconDown" onClick={scrollToSection}>
        <FiChevronsDown
          style={{
            width: '85%',
            height: '85%',
            color: '#ccc',
            animation: 'down .8s alternate linear infinite'
          }}
        />
      </div>

    </Container>
  )
}

export default Header
