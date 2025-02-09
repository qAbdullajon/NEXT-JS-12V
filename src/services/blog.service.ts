import { request, gql } from "graphql-request"
import { BlogType } from "src/interfaces/blog.interface";
import { CategoryType } from "src/interfaces/category.interface";

const graphApi = process.env.NEXT_PUBLIC_HAYGRAPH_ENDPOINT || ''

export const BlogsService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          id
          slug
          title
          excerpt
          createdAt
          image {
            url
          }
          description {
            text
          }
          auther {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
        }
      }
    `;

    const result = await request<{ blogs: BlogType[] }>(graphApi, query)
    return result.blogs
  },

  async getLastBlogs() {
    const query = gql`
      query MyQuery {
        blogs(last: 2){
          id
          slug
          title
          createdAt
          image {
            url
          }
          description {
            text
          }
          auther {
            name
            avatar {
              url
            }
          }
        }
      }
    `

    const result = await request<{ blogs: BlogType[] }>(graphApi, query)
    return result.blogs
  },
  async getCategory() {
    const query = gql`
      query GetCategory {
      categories {
        label
        slug
      }
    }
    `
    const result = await request<{ categories: CategoryType[] }>(graphApi, query)
    return result.categories
  }
}