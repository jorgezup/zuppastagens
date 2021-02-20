import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

import { Container, Wrapper, Video, WhatsApp } from '../styles/pages/Capim'

const CapiacuPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        <Wrapper>
          <section>
            <h2>O que é o Capim BRS - Capiaçu</h2>
            <Video>
              <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/Yr02hw8eecs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Video>
            <div>
              <span>Faça já um orçamento!</span>
              <WhatsApp>
                <a href="https://wa.me/5518997996385?text=Olá! Quero saber mais sobre o capim" target="_black">
                  <FaWhatsapp />
                  <span>(18) 99799-6385</span>
                </a>
              </WhatsApp>
            </div>
          </section>
        </Wrapper>
      </Container>
    </motion.div>
  )
}

export default CapiacuPage
