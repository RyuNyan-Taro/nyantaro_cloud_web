import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a database or CMS
const blogPosts = [
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
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Await the params object to access its properties
  const resolvedParams = await Promise.resolve(params);
  const post = blogPosts.find((post) => post.slug === resolvedParams.slug);
  
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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Await the params object to access its properties
  const resolvedParams = await Promise.resolve(params);
  const post = blogPosts.find((post) => post.slug === resolvedParams.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link 
        href="/blog"
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-6"
      >
        <svg 
          className="w-4 h-4 mr-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to all posts
      </Link>
      
      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">{new Date(post.date).toLocaleDateString('ja-JP', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
        
        <div className="prose max-w-none">
          <p>{post.content}</p>
          <p>This is a placeholder for actual blog content. In a real application, this would include full article content, possibly formatted with Markdown or rich text.</p>
        </div>
      </article>
    </div>
  );
}
