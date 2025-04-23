import { BlogPost } from '../types';
import { BlogPostCard } from './BlogPostCard';

interface BlogPostListProps {
  posts: BlogPost[];
  formatDate: (date: string) => string;
}

export const BlogPostList: React.FC<BlogPostListProps> = ({ posts, formatDate }) => {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <BlogPostCard 
          key={post.id}
          post={post} 
          formatDate={formatDate} 
        />
      ))}
    </div>
  );
};
