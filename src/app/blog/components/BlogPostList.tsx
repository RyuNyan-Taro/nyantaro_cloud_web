import { BlogPost } from '../types';
import { BlogPostCard } from './BlogPostCard';

interface BlogPostListProps {
  posts: BlogPost[];
  formatDate: (date: string) => string;
}

export const BlogPostList: React.FC<BlogPostListProps> = ({ posts, formatDate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-wild-md">
      {posts.map((post, index) => (
        <BlogPostCard
          key={post.id}
          post={post}
          formatDate={formatDate}
          index={index}
        />
      ))}
    </div>
  );
};
