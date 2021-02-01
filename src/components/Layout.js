/* eslint-disable react/prop-types */
import React from 'react'
import { Container } from '../styles/components/Layout'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
