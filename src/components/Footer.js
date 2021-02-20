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
            <a href="https://www.facebook.com/zuppastagens" target="_black" rel="noopener noreferrer">
              <FaFacebookSquare />
              <span>/zuppastagens</span>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/zuppastagens" target="_black" rel="noopener noreferrer">
              <FiInstagram />
              <span>@zuppastagens</span>
            </a>
          </div>
          <div>
            <a href="mailto:zuppastagens@gmail.com" >
              <FiMail />
              <span>zuppastagens@gmail.com</span>
            </a>
          </div>
          <div>
            <a href="https://wa.me/5518997996385?text=Olá! Quero saber mais sobre o capim" target="_black" rel="noopener noreferrer">
              <FaWhatsapp />
              <span>(18) 99799-6385</span>
            </a>
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
