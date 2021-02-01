import React from 'react'
import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

import { Container, Navigation, Wrapper, Video, WhatsApp } from '../styles/pages/Kurumi'

const KurumiPage = () => {
  return (
    <Container>
      <Navigation>
        <Link href="/">
          <p>Zup Pastagens</p>
        </Link>
        <FiMenu />
      </Navigation>
      <Wrapper>
        <section>
          <h2>O que é o Capim BRS - Kurumi</h2>
          <Video>
            <img src="/youtube.svg" alt=""/>
            <span>Em breve !!</span>
          </Video>
          <div>
            <span>Faça já um orçamento</span>
            <WhatsApp>
              <a href="https://wa.me/5518996080966?text=Olá! Quero saber mais sobre o capim" target="_black">
                <FaWhatsapp />
                <span>(18) 99608-0966</span>
              </a>
            </WhatsApp>
          </div>
        </section>

        <section>
          <h2>Como utilizar o Capim BRS - Kurumi</h2>
          <Video>
            <img src="/youtube.svg" alt=""/>
            <span>Em breve !!</span>
          </Video>
          <div>
            <span>Faça já um orçamento</span>
            <WhatsApp>
              <a href="https://wa.me/5518996080966?text=Olá! Quero saber mais sobre o capim" target="_black">
                <FaWhatsapp />
                <span>(18) 99608-0966</span>
              </a>
            </WhatsApp>
          </div>
        </section>
      </Wrapper>
    </Container>
  )
}

export default KurumiPage
