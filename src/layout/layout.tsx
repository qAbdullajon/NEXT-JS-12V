import { JSX } from 'react'
import { LayoutProps } from './layout.props'
import { Box } from '@mui/material'
import { Footer, Navbar } from 'src/components'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight={'100vh'}>{children}</Box>
      <Footer />
    </>
  )
}

export default Layout