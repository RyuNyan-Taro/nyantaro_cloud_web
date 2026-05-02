import Link from 'next/link';
import { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
  formatDate: (date: string) => string;
  index: number;
}

const ROTATIONS = ['rotate-[0deg]', 'rotate-[2deg]', 'rotate-[-1deg]', 'rotate-[1deg]'];

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, formatDate, index }) => {
  const rotation = ROTATIONS[index % 4];
  const bg = index % 2 === 0 ? 'bg-primary-container' : 'bg-surface-container-high';

  return (
    <article className={`torn-edge p-wild-sm relative ${bg} ${rotation} filter drop-shadow-[10px_10px_0px_rgba(0,0,0,0.3)]`}>
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 rounded-full blur-xl pointer-events-none" />

      <p className="font-body text-label-sm text-primary uppercase tracking-widest mb-2 relative z-10">
        {formatDate(post.date)}
      </p>

      <h2 className="font-headline text-headline-md text-on-primary-container mb-4 relative z-10">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
          {post.title}
        </Link>
      </h2>

      <p className="font-body text-body-md text-on-surface-variant mb-wild-sm relative z-10">
        {post.description}
      </p>

      <div className="flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-tertiary-fixed shadow-[0_0_10px_rgba(217,234,163,0.8)]" />
          <span className="font-body text-label-sm text-on-surface-variant">{post.readTime}</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="font-body text-label-sm text-primary uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-1"
        >
          Read more
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};
