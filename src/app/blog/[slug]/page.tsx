import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPost } from '../types';

interface DetailedBlogPost extends Omit<BlogPost, 'description' | 'readTime'> {
  content: string;
}

// This would typically come from a database or CMS
const blogPosts: DetailedBlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    content: 'This is a sample blog post about getting started with Next.js.',
    date: '2023-10-15',
    slug: 'getting-started-with-nextjs',
  },
  {
    id: '2',
    title: 'Why TypeScript is Worth Learning',
    content: 'This is a sample blog post about the benefits of TypeScript.',
    date: '2023-09-20',
    slug: 'why-typescript-is-worth-learning',
  },
  {
    id: '3',
    title: 'Styling in Modern Web Applications',
    content: 'This is a sample blog post about styling in modern web applications.',
    date: '2023-08-05',
    slug: 'styling-in-modern-web-applications',
  },
  {
    id: '4',
    title: 'Building Responsive Layouts',
    content: 'This is a sample blog post about building responsive layouts.',
    date: '2023-07-12',
    slug: 'building-responsive-layouts',
  },
  {
    id: '5',
    title: 'State Management in React Applications',
    content: 'This is a sample blog post about state management in React applications.',
    date: '2023-06-28',
    slug: 'state-management-in-react',
  },
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // Must await params before accessing properties
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = blogPosts.find((post) => post.slug === slug);
  
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
  
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <div className="prose">{post.content}</div>
    </article>
  );
}