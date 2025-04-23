export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface DetailedBlogPost extends Omit<BlogPost, 'description' | 'readTime'> {
  content: string;
}
