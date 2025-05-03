import { Metadata } from 'next';
import { BlogPostList } from './components/BlogPostList';
import { getBlogPosts, formatDate } from '@/app/blog/services/posts';

export const metadata: Metadata = {
  title: 'Blog | My Website',
  description: 'Read our latest blog posts and articles',
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>
      <BlogPostList posts={blogPosts} formatDate={formatDate} />
    </div>
  );
}
