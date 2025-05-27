import { BlogPost } from '../types';

// MicroCMS API types
type MicroCMSCategory = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

type MicroCMSImage = {
  url: string;
  height: number;
  width: number;
};

type MicroCMSBlogPost = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category?: MicroCMSCategory;
};

type MicroCMSResponse = {
  contents: MicroCMSBlogPost[];
  totalCount: number;
  offset: number;
  limit: number;
};

// Cache for blog posts data
let blogPostsCache: (BlogPost & { content: string })[] | null = null;

// Function to fetch blog posts from microCMS
export async function fetchBlogPosts(): Promise<(BlogPost & { content: string })[]> {
  console.log('Fetching blog posts...');
  // Return cached data if available
  if (blogPostsCache) {
    return blogPostsCache;
  }

  try {
    const response = await fetch('https://nyantaroblog.microcms.io/api/v1/blogs', {
      headers: new Headers({
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || ''
      }),
      next: { revalidate: 3600}
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status}`);
    }

    const data: MicroCMSResponse = await response.json();

    // Map microCMS data to our BlogPost format
    const posts = data.contents.map(post => ({
      id: post.id,
      title: post.title,
      description: post.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...', // Strip HTML and limit to 160 chars
      content: post.content,
      date: new Date(post.publishedAt).toISOString().split('T')[0], // Format as YYYY-MM-DD
      readTime: `${Math.ceil(post.content.length / 500)} min read`, // Rough estimate based on content length
      slug: post.id // Use post ID as slug
    }));

    // Cache the posts
    blogPostsCache = posts;

    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Helper functions for retrieving data in different formats
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const posts = await fetchBlogPosts();
  return posts.map(({ id, title, description, date, readTime, slug }) => ({
    id, title, description, date, readTime, slug
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Function to fetch a single blog post by ID
export async function fetchBlogPostById(postId: string): Promise<(BlogPost & { content: string }) | null> {
  console.log(`Fetching blog post with ID: ${postId}`);

  // Check if we have the post in cache
  if (blogPostsCache) {
    const cachedPost = blogPostsCache.find(post => post.id === postId);
    if (cachedPost) {
      console.log(`Found post ${postId} in cache`);
      return cachedPost;
    }
  }

  // If not in cache, fetch from API
  try {
    const response = await fetch(`https://nyantaroblog.microcms.io/api/v1/blogs/${postId}`, {
      headers: new Headers({
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || ''
      }),
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${response.status}`);
    }

    const post: MicroCMSBlogPost = await response.json();

    // Format post data
    return {
      id: post.id,
      title: post.title,
      description: post.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...', // Strip HTML and limit to 160 chars
      content: post.content,
      date: new Date(post.publishedAt).toISOString().split('T')[0], // Format as YYYY-MM-DD
      readTime: `${Math.ceil(post.content.length / 500)} min read`, // Rough estimate based on content length
      slug: post.id // Use post ID as slug
    };
  } catch (error) {
    console.error(`Error fetching blog post ${postId}:`, error);
    return null;
  }
}

// For backward compatibility - will be used by components that expect synchronous data
export const blogPostsData: (BlogPost & { content: string })[] = [];

// Format date to a more readable format
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ja-JP', options);
}
