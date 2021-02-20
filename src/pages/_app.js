/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
import React from 'react'
import { AnimatePresence } from 'framer-motion'

import GlobalStyle from '../styles/global'

import Layout from '../components/Layout'
import ScrollToTop from '../components/ScrollToTop'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <GlobalStyle />
    </Layout>
  )
}

export default MyApp
