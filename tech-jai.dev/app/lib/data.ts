import type { Blog } from "~/types";
import { blogs } from "~/data";
export function getBlogPostBySlug(slug: string): Blog | undefined {
  return blogs.find(blog => blog.slug === slug);
}
