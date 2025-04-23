import { Metadata } from 'next';
import { BlogPostList } from './components/BlogPostList';
import { BlogPost } from './types';

export const metadata: Metadata = {
  title: 'Blog | My Website',
  description: 'Read our latest blog posts and articles',
};

// Sample blog post data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    description: 'Learn how to set up your first Next.js project and understand the core concepts.',
    date: '2023-10-15',
    readTime: '5 min read',
    slug: 'getting-started-with-nextjs',
  },
  {
    id: '2',
    title: 'Why TypeScript is Worth Learning',
    description: 'Discover the benefits of TypeScript and how it can improve your development experience.',
    date: '2023-09-20',
    readTime: '8 min read',
    slug: 'why-typescript-is-worth-learning',
  },
  {
    id: '3',
    title: 'Styling in Modern Web Applications',
    description: 'Explore different styling approaches for modern web applications, including Tailwind CSS.',
    date: '2023-08-05',
    readTime: '6 min read',
    slug: 'styling-in-modern-web-applications',
  },
  {
    id: '4',
    title: 'Building Responsive Layouts',
    description: 'Learn techniques for creating responsive layouts that work across all device sizes.',
    date: '2023-07-12',
    readTime: '7 min read',
    slug: 'building-responsive-layouts',
  },
  {
    id: '5',
    title: 'State Management in React Applications',
    description: 'Compare different state management solutions for React applications.',
    date: '2023-06-28',
    readTime: '10 min read',
    slug: 'state-management-in-react',
  },
];

// Format date to a more readable format
function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ja-JP', options);
}

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>
      <BlogPostList posts={blogPosts} formatDate={formatDate} />
    </div>
  );
}