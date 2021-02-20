/* eslint-disable react/prop-types */
import React from 'react'
import { Container } from '../styles/components/Layout'

import Navbar from '../components/Nav/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
