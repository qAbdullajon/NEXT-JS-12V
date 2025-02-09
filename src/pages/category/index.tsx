import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { CategoryType } from 'src/interfaces/category.interface'
import Layout from 'src/layout/layout'
import SEO from 'src/layout/seo/seo'
import { BlogsService } from 'src/services/blog.service'

const AllCategoryPage = ({ categories }: AllCategory) => {
  const router = useRouter()

  return (
    <SEO metaTitle='All Category'>
      <Layout>
        <Box
          width={{ xs: '100%', md: '80%' }}
          height={{ xs: '30vh', md: '50vh' }}
          sx={{
            backgroundColor: 'black',
            marginInline: 'auto',
            marginTop: '5%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <Typography variant='h3' fontFamily={'cursive'}>All category</Typography>
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            {
              categories.map(item => (
                <Button onClick={() => router.push(`/category/${item.slug}`)} key={item.slug}># {item.label}</Button>
              ))
            }
          </ButtonGroup>
        </Box>
      </Layout>
    </SEO>
  )
}

export default AllCategoryPage

export const getServerSideProps: GetServerSideProps<AllCategory> = async () => {
  const categories = await BlogsService.getCategory()

  return {
    props: {
      categories
    }
  }
}

interface AllCategory {
  categories: CategoryType[]
}