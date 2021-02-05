/* eslint-disable react/prop-types */
import React from 'react'
import { AnimatePresence } from 'framer-motion'

import GlobalStyle from '../styles/global'

import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function MyApp ({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <GlobalStyle />
      <Footer />
    </>
  )
}

export default MyApp
