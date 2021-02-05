import React from 'react'
import Link from 'next/link'
import { FiMail, FiInstagram } from 'react-icons/fi'
import { FaFacebookSquare, FaWhatsapp } from 'react-icons/fa'

import { Container, Logo, SocialIcons, Links, Copyright } from '../styles/components/Footer'

import Grass from '../assets/grass-1.svg'

const Footer = () => {
  return (
    <Container>
      <div className="wrapper">
        <SocialIcons>
          <div>
            <FaFacebookSquare />
            <span>/zuppastagens</span>
          </div>
          <div>
            <FiInstagram />
            <span>@zuppastagens</span>
          </div>
          <div>
            <FiMail />
            <span>contato@zuppastagens.com.br</span>
          </div>
          <div>
            <FaWhatsapp />
            <span>(18) 99608-0966</span>
          </div>
        </SocialIcons>
        <Logo>
          <Grass />
          <p className="title">Zup Pastagens</p>
          <p className="description">Pasto de Alto Rendimento</p>
        </Logo>
        <Links>
          <Link href="/">Home</Link>
          <Link href="/kurumi">Capim BRS - Kurumi</Link>
          <Link href="/capiacu">Capim BRS - Capiaçu</Link>
          <Link href="#quem-somos">Quem Somos</Link>
          <Link href="#contato">Contato</Link>
        </Links>
      </div>
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
