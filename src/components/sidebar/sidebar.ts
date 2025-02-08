import { BlogType } from "src/interfaces/blog.interface";
import { CategoryType } from "src/interfaces/category.interface";

export interface SidebarProps {
  lastBlog: BlogType[]
  categories: CategoryType[]
}