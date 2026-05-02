import { Metadata } from 'next';
import { BlogPostList } from './components/BlogPostList';
import { getBlogPosts, formatDate } from '@/app/blog/services/blogApi';

export const metadata: Metadata = {
  title: 'Blog | Nyantaro Cloud',
  description: 'Read our latest blog posts and articles',
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="px-wild-md lg:px-wild-lg py-wild-md texture-noise relative overflow-hidden min-h-screen">
      <div className="absolute top-10 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl z-0 pointer-events-none mix-blend-screen" />
      <header className="mb-wild-lg relative z-10">
        <h1 className="font-headline text-headline-xl text-on-background mb-wild-xs rotate-[-1deg] inline-block">
          BLOG POSTS
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant italic">
          Dispatches from the digital undergrowth.
        </p>
      </header>
      <section className="relative z-10">
        <BlogPostList posts={blogPosts} formatDate={formatDate} />
      </section>
    </div>
  );
}
