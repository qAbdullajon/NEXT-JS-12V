import { Box } from '@mui/material'
import { Content, Hero, Sidebar } from 'src/components'
import Layout from 'src/layout/layout'

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Box sx={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  )
}

export default Index