import Footer from '../Footer/Footer'
import Meta from '../Meta/Meta'
import Header from '../Header/Header'
import React from 'react'
import { useTheme, Container } from '@mui/material'
import { useAmp } from 'next/amp'

export default function Layout({ children }: { children: JSX.Element }) {
  const isAmp = useAmp()

  return (
    <>
      <Header />
      {isAmp ? (
        <div style={{ padding: '15px' }}>{children}</div>
      ) : (
        <>
          <Meta />
          <Container maxWidth="lg" sx={{ padding: { xs: '0 15px', md: 0 } }}>
            {children}
          </Container>
          <Container maxWidth="lg">
            <Footer />
          </Container>
        </>
      )}
    </>
  )
}
