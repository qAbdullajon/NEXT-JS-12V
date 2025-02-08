import { request, gql } from "graphql-request"

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

    const result = await request(graphApi, query)
    return result
  }
}