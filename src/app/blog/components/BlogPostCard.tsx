import Link from 'next/link';
import { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
  formatDate: (date: string) => string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, formatDate }) => {
  return (
    <article 
      key={post.id} 
      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-semibold text-blue-600 hover:text-blue-800">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <span className="text-sm text-gray-500">{post.readTime}</span>
      </div>
      
      <p className="text-gray-600 mb-4">{post.description}</p>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Read more
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};
