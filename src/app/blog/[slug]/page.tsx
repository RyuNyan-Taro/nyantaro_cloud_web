import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, formatDate } from '../data/posts';

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // Must await params before accessing properties
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Blog`,
    description: post.content.substring(0, 160),
  };
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: Props) {
  // Must await params before accessing properties
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{formatDate(post.date)}</p>
      <div className="prose">{post.content}</div>
    </article>
  );
}