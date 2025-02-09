import { Avatar, Box, Divider, Typography } from '@mui/material'
import { format } from 'date-fns'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { Sidebar } from 'src/components'
import { calculateEstimetedTimeToRead } from 'src/helpers/time.format'
import { BlogType } from 'src/interfaces/blog.interface'
import { CategoryType } from 'src/interfaces/category.interface'
import Layout from 'src/layout/layout'
import { BlogsService } from 'src/services/blog.service'

const SlugBlog = ({ blog, lastBlog, categories }: DetailBlogProps) => {

  return (
    <Layout>
      <Box sx={{
        padding: '20px', bgcolor: 'rgba(0,0,0,.5)',
        borderRadius: '8px',
      }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', padding: '20px' }}>
          <Box
            width={{ xs: '100%', md: '70%' }}
            sx={{
              padding: '20px', bgcolor: 'rgba(0,0,0,.5)',
              borderRadius: '8px',
            }}>
            <Box position={'relative'} width={'100%'} height={{ xs: '30vh', md: '50vh' }}>
              <Image src={blog.image.url} alt={blog.title} fill priority style={{ borderRadius: '8px', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', paddingTop: '20px' }}>
              <Avatar alt={blog.auther.name} src={blog.auther.avatar.url} />
              <Box>
                <Typography variant="body2">{blog.auther.name}</Typography>
                <Box sx={{ opacity: '.3' }}>{format(new Date(blog.createdAt), 'dd MMM, yyyy')} &#x2022; {calculateEstimetedTimeToRead(blog.description.text)}min read</Box>
              </Box>
            </Box>
            <Typography variant="h4" paddingTop={'20px'}>{blog.title}</Typography>
            <Typography paddingY={'5px'} variant="body1" color="gray">{blog.excerpt}</Typography>
            <div style={{ opacity: '.8' }} dangerouslySetInnerHTML={{ __html: blog.description.html }} />
          </Box>
          <Sidebar lastBlog={lastBlog} categories={categories} />
        </Box>
      </Box>
    </Layout>
  )
}

export default SlugBlog

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const blog = await BlogsService.getDetailBlog(query.slug as string)
  const lastBlog = await BlogsService.getLastBlogs()
  const categories = await BlogsService.getCategory()

  return {
    props: {
      blog,
      lastBlog,
      categories
    }
  }
}

interface DetailBlogProps {
  blog: BlogType,
  lastBlog: BlogType[];
  categories: CategoryType[]
}