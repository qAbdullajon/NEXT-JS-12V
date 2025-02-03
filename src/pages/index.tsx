import { Button } from '@mui/material'
import Head from 'next/head'
import React from 'react'

const Index = () => {
  return (
    <>
      <Head>
        <title>Index page | Sammi</title>
      </Head>
      <div>
        <Button variant='contained'>Index page</Button>
      </div>
    </>
  )
}

export default Index