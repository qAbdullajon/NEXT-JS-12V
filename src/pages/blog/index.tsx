import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'
import React from 'react'
import { Content } from 'src/components'
import { BlogType } from 'src/interfaces/blog.interface'
import Layout from 'src/layout/layout'
import SEO from 'src/layout/seo/seo'
import { BlogsService } from 'src/services/blog.service'

const AllBlogsPage = ({ blogs }: AllBlogsProps) => {
  console.log(blogs);

  return (
    <SEO metaTitle='All Blog'>
      <Layout>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', padding: '20px', justifyContent: 'center' }}>
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  )
}

export default AllBlogsPage

export const getServerSideProps: GetServerSideProps<AllBlogsProps> = async () => {
  const blogs = await BlogsService.getAllBlogs()

  return {
    props: {
      blogs,
    }
  }
}

interface AllBlogsProps {
  blogs: BlogType[];
}