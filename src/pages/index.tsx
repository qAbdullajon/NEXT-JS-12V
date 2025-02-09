import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'
import { Content, Hero, Sidebar } from 'src/components'
import { BlogType } from 'src/interfaces/blog.interface'
import { CategoryType } from 'src/interfaces/category.interface'
import Layout from 'src/layout/layout'
import SEO from 'src/layout/seo/seo'
import { BlogsService } from 'src/services/blog.service'

const Index = ({ blogs, lastBlog, categories }: HomePageProps) => {

  return (
    <SEO>
      <Layout>
        <Hero blogs={blogs.slice(0, 3)} />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', padding: '20px' }}>
          <Sidebar lastBlog={lastBlog} categories={categories} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  )
}
export default Index

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogsService.getAllBlogs()
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

interface HomePageProps {
  blogs: BlogType[];
  lastBlog: BlogType[];
  categories: CategoryType[]
}