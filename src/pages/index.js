import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

import { Container, Section, Wrapper, Contato } from '../styles/pages/Home'
import Header from '../components/Header'

export default function Home () {
  return (
    <Container>
      <Head>
        <title>Zup Pastagens</title>
      </Head>
      <Header />
      <main>
        <Section id="kurumi">
          <Wrapper>
            <h2>Capim Elefante - BRS Kurumi</h2>
            <img src="/kurumi.jpg" alt=""/>

            <h3>Características</h3>
            <section>
              <p> - Desenvolvido pelo programa de melhoramento genético da Embrapa</p>
              <p> - Porte baixo (anão) </p>
              <p> - Uso sob pastejo</p>
              <p> - Rápida expansão foliar e intenso perfilhamento</p>
              <p> - Plantio realizado por meio de estacas</p>
              <p> - Acúmulo de forragem durante o período chuvoso, entre 120 e 170 kg MS/ha/dia </p>
              <p> - Teor de Proteína Bruta (PB) entre 18 e 20%</p>
              <p> - Coeficiente de Digestibilidade entre 68 e 70%</p>
            </section>

            <h3>Manejo</h3>
            <section>
              <p> - Pastejo rotacionado </p>
              <p> - Entrada dos animais quando o pasto apresentar entre 75 e 80 cm de altura</p>
              <p> - Período de descanso dos piquetes  de aproximadamente 22 dias</p>
            </section>

            <h3>Produção animal</h3>
            <section>
              <p> - Taxa de lotação das pastagens variam entre 4 e 7 UA/ha</p>
              <p> - Ganhos de peso de até 700 g/animal/dia</p>
              <p> - É possível obter entre 18-19 Litros de leite/vaca/dia  </p>
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
            <img src="/capiacu.jpg" alt=""/>

            <h3>Características</h3>
            <section>
              <p> - Desenvolvido pelo programa de melhoramento genético da Embrapa</p>
              <p> - Porte alto, aproximadamente 4,20 m</p>
              <p> - Touceiras de formato ereto</p>
              <p> - Elevada densidade de perfilhos basais</p>
              <p> - Elevada desensidade e boa resistência ao tombamento</p>
              <p> - Propagação por meio de colmos</p>
              <p> - Facilidade para colheita mecanizada</p>
              <p> - Potencial de produção de biomassa superior ao do milho e da cana -de-açúcar </p>
              <p> - Excelente para produção de silagem ou para fornecimento picado no cocho</p>
              <p> - Menor custo de produção de silagem</p>
              <p> - Quantidades totais de PB e NDT superiores ao milho, cana-de-açúcar e sorgo</p>
            </section>

            <h3>Utilização</h3>
            <section>
              <p> - Cocho in Natura</p>
              <p> - Silagem</p>
            </section>

            <span>https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1056288/brs-capiacu-cultivar-de-capim-elefante-de-alto-rendimento-para-producao-de-silagem</span>

            <Link href="/capiacu">
              <button>Saiba mais</button>
            </Link>
          </Wrapper>
        </Section>

        <Section>
          <Wrapper>
            <h2>Quem Somos</h2>
            <section>
              <p>
              Estamos no ramo da ordenha bovina desde de.... , com o intuito de aumentar a produtividade do nosso rebanho, em .... vimos a necessidade em buscar alternativas de capim ricos em nutrientes e que se adaptam com o clima da nossa região.
              </p>
            </section>
          </Wrapper>
        </Section>

        <Section style={{ backgroundColor: '#eeeeee' }}>
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
  )
}
