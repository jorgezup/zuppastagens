import React from 'react'
import { FiMail, FiInstagram } from 'react-icons/fi'
import { FaFacebookSquare, FaWhatsapp } from 'react-icons/fa'

import { Container, Logo, SocialIcons, Copyright } from '../styles/components/Footer'

import Grass from '../assets/grass-1.svg'

const Footer = () => {
  return (
    <Container>
      <Logo>
        <Grass />
        <p>Zup Pastagens</p>
        <p>Pasto de Alto Rendimento</p>
      </Logo>
      <SocialIcons>
        <FaFacebookSquare />
        <FiInstagram />
        <FiMail />
        <FaWhatsapp />
      </SocialIcons>
      <Copyright>
        <span>Todos os Direitos Reservados - Zup Pastagens © 2021 </span>
        <div>
          <span>Jorge Zupirolli</span>
        </div>
      </Copyright>
    </Container>
  )
}

export default Footer
