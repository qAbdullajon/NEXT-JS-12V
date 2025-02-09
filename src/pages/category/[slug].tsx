import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'
import React from 'react'
import { Content, Sidebar } from 'src/components'
import { BlogType } from 'src/interfaces/blog.interface'
import { CategoryType } from 'src/interfaces/category.interface'
import Layout from 'src/layout/layout'
import { BlogsService } from 'src/services/blog.service'

const CategoryPage = ({ blogs, lastBlog, categories }: CategorySlugProps) => {

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', padding: '20px' }}>
        <Sidebar lastBlog={lastBlog} categories={categories} />
        <Content blogs={blogs} />
      </Box>
    </Layout>
  )
}

export default CategoryPage

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const blogs = await BlogsService.getCategorySlug(query.slug as string)
  const lastBlog = await BlogsService.getLastBlogs()
  const categories = await BlogsService.getCategory()

  return {
    props: {
      blogs,
      lastBlog,
      categories
    }
  }
}

interface CategorySlugProps {
  blogs: BlogType[];
  lastBlog: BlogType[];
  categories: CategoryType[];
}