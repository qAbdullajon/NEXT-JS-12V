export interface BlogType {
  id: string
  slug: string
  title: string
  excerpt: string
  auther: {
    name: string
    avatar: {
      url: string
    }
  }
  category: {
    label: string
    slug: string
  }
}