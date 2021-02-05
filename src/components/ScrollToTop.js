import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import { FiArrowUpCircle } from 'react-icons/fi'

import { Container } from '../styles/components/ScrollToTop'

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll()
  const [visible, setVisibility] = useState(false)

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisibility(true)
    } else {
      setVisibility(false)
    }
  }, [pageYOffset])

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) {
    return false
  }

  return (
    <Container onClick={handleScrollToTop}>
      <FiArrowUpCircle />
    </Container>
  )
}

export default ScrollToTop
