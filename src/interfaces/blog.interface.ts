export interface BlogType {
  id: string
  slug: string
  title: string
  excerpt: string
  createdAt: Date
  image: {
    url: string
  }
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
