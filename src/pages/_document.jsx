/* eslint-disable space-before-function-paren */
import React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin />

          <link
            href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Lato:wght@100;300;400;700;900&family=Piedra&display=swap"
            rel="stylesheet"
          />

          <meta name="title" content="Zup Pastagens" />
          <meta name="description" content="Mudas de Capim de alta qualidade.
          Venda de Mudas de Capim: BRS-Kurumi e BRS-Capiaçu."/>

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://zuppastagens.com.br/" />
          <meta property="og:title" content="Zup Pastagens" />
          <meta property="og:description" content="Mudas de Capim de alta qualidade.
          Venda de Mudas de Capim: BRS-Kurumi e BRS-Capiaçu."/>
          <meta property="og:image" content="https://res.cloudinary.com/ddj1kyras/image/upload/v1613937603/zup_logo_zeuhhf.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://zuppastagens.com.br/" />
          <meta property="twitter:title" content="Zup Pastagens" />
          <meta property="twitter:description" content="Mudas de Capim de alta qualidade.
          Venda de Mudas de Capim: BRS-Kurumi e BRS-Capiaçu."/>
          <meta property="twitter:image" content="https://res.cloudinary.com/ddj1kyras/image/upload/v1613937603/zup_logo_zeuhhf.png" />

          <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
          <link rel="manifest" href="/favicon_io/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
