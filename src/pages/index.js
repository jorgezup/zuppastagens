/* eslint-disable space-before-function-paren */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

import Header from '../components/Header'

import { Container, Section, Wrapper, WrapperImages, Contato } from '../styles/pages/Home'

export default function Home() {
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
              <div className="line" />

              <WrapperImages>
                <div className="images">
                  <Image id="img1" className="imgbox" src="/zup%20pastagens/kurumi_mtnp4j" alt="Capim BRS-Kurumi" layout="fill" objectFit="cover" />
                  <Image id="img2" className="imgbox" src="/zup%20pastagens/kurumi-2_iixhpv" alt="Capim BRS-Kurumi" layout="fill" objectFit="cover" />
                  <Image id="img3" className="imgbox" src="/zup%20pastagens/kurumi-3_a3juu4" alt="Capim BRS-Kurumi" layout="fill" objectFit="cover" />
                  <Image id="img4" className="imgbox" src="/zup%20pastagens/kurumi-4_mex18z" alt="Capim BRS-Kurumi" layout="fill" objectFit="cover" />
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
              <div className="line" />

              <WrapperImages>
                <div className="images">
                  <Image id="img1" className="imgbox" src="/zup%20pastagens/capiacu_evsefn" alt="Capim BRS-Capiaçu" layout="fill" objectFit="cover" />
                  <Image id="img2" className="imgbox" src="/zup%20pastagens/capiacu-2_rdtzdl" alt="Capim BRS-Capiaçu" layout="fill" objectFit="cover" />
                  <Image id="img3" className="imgbox" src="/zup%20pastagens/capiacu-3_ujyc3p" alt="Capim BRS-Capiaçu" layout="fill" objectFit="cover" />
                  <Image id="img4" className="imgbox" src="/zup%20pastagens/capiacu-4_an0ljs" alt="Capim BRS-Capiaçu" layout="fill" objectFit="cover" />
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
                <div>
                  <p>Estamos localizados no município de Adamantina no inteiror do Estado de São Paulo.</p>

                  <p>Somos produtores rurais da pecuária leiteira desde 2013.</p>

                  <p>Com intuito de aumentar a produtividade do nosso rebanho em 2017 vimos a necessidade em buscar alternativas de capim ricos em nutrientes e que se adaptassem com o clima da nossa região.</p>

                  <p>Sendo assim, adquirimos do viveiro da Embrapa Vargem Grande do Sul as primeiras mudas de capim BRS Capiaçu e BRS Kurumi.</p>

                  <p>A partir de 2018 realizamos o manejo e multiplicação das mudas para suprir nossas necessidades. E em 2020,  começamos a realizar a comercialização das mudas.</p>
                </div>
              </section>
            </Wrapper>
          </Section>

          <Section id="contato" style={{ backgroundColor: '#eeeeee' }}>
            <Wrapper>
              <h2>Contate-nos</h2>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.955612581666!2d-51.0876229848538!3d-21.704448285636328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496a1f653f6e74b%3A0x421b2e673968277!2sZup%20Pastagens!5e0!3m2!1spt-BR!2sbr!4v1613764202954!5m2!1spt-BR!2sbr"
                style={{ height: '450px', width: '100%' }}></iframe>
              <Contato>
                <div>
                  <p>Chácara Nossa Senhora de Lourdes</p>
                  <p>Bairro: Córrego do Rancho</p>
                  <p>Adamantina - SP</p>
                </div>
                <a href="https://wa.me/5518997996385?text=Olá! Quero saber mais sobre o capim" target="_black" rel="noopener noreferrer">
                  <FaWhatsapp />
                  <span>(18) 99799-6385</span>
                </a>
              </Contato>
            </Wrapper>
          </Section>
        </main>
      </Container>
    </motion.div>
  )
}
