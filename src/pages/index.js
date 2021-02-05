import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

import { Container, Section, Wrapper, WrapperImages, Contato } from '../styles/pages/Home'
import Header from '../components/Header'

export default function Home () {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      animate={{ opacity: 1 }}
    >
    <Container>
      <Head>
        <title>Zup Pastagens</title>
      </Head>
      <Header />
      <main>
        <Section id="kurumi">
          <Wrapper>
            <h2>Capim Elefante - BRS Kurumi</h2>
            <div className="line"/>

            <WrapperImages>
              <div id="items">
                <div className="item">
                  <img src="/kurumi.jpg" alt=""/>
                </div>
                <div className="item">
                  <img src="/kurumi.jpg" alt=""/>
                </div>
                <div className="item">
                  <img src="/kurumi.jpg" alt=""/>
                </div>
                <div className="item">
                  <img src="/kurumi.jpg" alt=""/>
                </div>
              </div>
            </WrapperImages>

            <h3>Características</h3>
            <section>
              <p> - Desenvolvido pelo programa de <strong>melhoramento genético</strong> da Embrapa</p>
              <p> - Porte <strong>baixo (anão)</strong></p>
              <p> - Uso sob <strong>pastejo</strong></p>
              <p> - <strong>Rápida expansão foliar</strong> e intenso perfilhamento</p>
              <p> - Plantio realizado por meio de <strong>estacas</strong></p>
              <p> - Acúmulo de forragem durante o período chuvoso, <strong>entre 120 e 170 kg MS/ha/dia</strong> </p>
              <p> - Teor de Proteína Bruta (PB) <strong>entre 18 e 20%</strong></p>
              <p> - Coeficiente de Digestibilidade <strong>entre 68 e 70%</strong></p>
            </section>

            <h3>Manejo</h3>
            <section>
              <p> - Pastejo <strong>rotacionado</strong> </p>
              <p> - Entrada dos animais quando o pasto apresentar <strong>entre 75 e 80 cm</strong> de altura</p>
              <p> - Período de descanso dos piquetes  de <strong>aproximadamente 22 dias</strong></p>
            </section>

            <h3>Produção animal</h3>
            <section>
              <p> - Taxa de lotação das pastagens variam <strong>entre 4 e 7 UA/ha</strong></p>
              <p> - Ganhos de peso de até <strong>700 g/animal/dia</strong></p>
              <p> - É possível obter <strong>entre 18-19 Litros de leite/vaca/dia</strong></p>
            </section>
            <span>https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1015855/informacoes-sobre-a-cultivar-de-capim-elefante-brs-kurumi</span>

            <Link href="/kurumi">
              <button>
                Saiba mais
              </button>
            </Link>
          </Wrapper>

        </Section>
        <Section style={{ backgroundColor: '#eeeeee' }} id="capiacu">
          <Wrapper>
            <h2>Capim Elefante - BRS Capiaçu</h2>
            <div className="line"/>

            <WrapperImages>
              <div id="items">
                <div className="item">
                  <img src="/capiacu.jpg" alt=""/>
                </div>
                <div className="item">
                  <img src="/capiacu.jpg" alt=""/>
                </div>
                <div className="item">
                  <img src="/capiacu.jpg" alt=""/>
                </div>
                <div className="item">
                  <img src="/capiacu.jpg" alt=""/>
                </div>
              </div>
            </WrapperImages>

            <h3>Características</h3>
            <section>
              <p> - Desenvolvido pelo programa de <strong>melhoramento genético</strong> da Embrapa</p>
              <p> - Porte alto, <strong>aproximadamente 4,20 m</strong></p>
              <p> - <strong>Touceiras</strong> de formato ereto</p>
              <p> - Elevada densidade de <strong>perfilhos basais</strong></p>
              <p> - Boa <strong>resistência</strong> ao tombamento</p>
              <p> - Propagação por meio de <strong>colmos</strong></p>
              <p> - Facilidade para <strong>colheita mecanizada</strong></p>
              <p> - Potencial de produção de <strong>biomassa superior</strong> ao do milho e da cana-de-açúcar </p>
              <p> - Excelente para produção de <strong>silagem</strong> ou para fornecimento picado no cocho</p>
              <p> - <strong>Menor custo</strong> de produção de silagem</p>
              <p> - Quantidades totais de <strong>PB e NDT superiores</strong> ao milho, cana-de-açúcar e sorgo</p>
            </section>

            <h3>Utilização</h3>
            <section>
              <p> - <strong>Cocho</strong> in Natura</p>
              <p> - <strong>Silagem</strong></p>
            </section>

            <span>https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1056288/brs-capiacu-cultivar-de-capim-elefante-de-alto-rendimento-para-producao-de-silagem</span>

            <Link href="/capiacu">
              <button>Saiba mais</button>
            </Link>
          </Wrapper>
        </Section>

        <Section id="quem-somos">
          <Wrapper>
            <h2>Quem Somos</h2>
            <section>
              <p>
              Estamos no ramo da ordenha bovina desde de.... , com o intuito de aumentar a produtividade do nosso rebanho, em .... vimos a necessidade em buscar alternativas de capim ricos em nutrientes e que se adaptam com o clima da nossa região.
              </p>
            </section>
          </Wrapper>
        </Section>

        <Section id="contato" style={{ backgroundColor: '#eeeeee' }}>
          <Wrapper>
            <h2>Contate-nos</h2>
              <iframe style={{ height: '420px' }}
                src="https://maps.google.com/maps?width=100%25&amp;height=420&amp;hl=en&amp;q=Rua%20Carlos%20Gomes,%20Adamantina,%20SP+(Ch%C3%A1cara%20Nossa%20Senhora%20de%20Lourdes)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            <Contato>
              <div>
                <p>Chácara Nossa Senhora de Lourdes</p>
                <p>Bairro: Córrego do Rancho</p>
                <p>Adamantina - SP</p>
              </div>
              <a href="https://wa.me/5518996080966?text=Olá! Quero saber mais sobre o capim" target="_black">
                <FaWhatsapp />
                <span>(18) 99608-0966</span>
              </a>
            </Contato>
          </Wrapper>
        </Section>
      </main>
    </Container>
    </motion.div>
  )
}
