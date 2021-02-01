/* eslint-disable react/prop-types */
import React from 'react'

import GlobalStyle from '../styles/global'

import Footer from '../components/Footer'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </>
  )
}

export default MyApp
