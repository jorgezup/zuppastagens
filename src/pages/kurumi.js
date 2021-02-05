import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import Navbar from '../components/Nav/Navbar'

import { Container, Wrapper, Video, WhatsApp } from '../styles/pages/Capim'

const KurumiPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      animate={{ opacity: 1 }}
    >
    <Container>
      <Navbar />
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
    </motion.div>
  )
}

export default KurumiPage
