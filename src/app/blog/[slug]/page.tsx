import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchBlogPosts, formatDate } from "@/app/blog/services/posts";
import { BlogPost } from '../types';
import { cache } from 'react';

const getPostData = cache(async (slug: string): Promise<(BlogPost & { content: string }) | null> => {
  const posts = await fetchBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // Must await params before accessing properties
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 通常はgetPostDataの結果を使用しますが、ここでは簡易的な情報のみ提供
  return {
    title: `ブログ記事 - ${slug} | Blog`,
    description: `${slug}についての記事です`, 
  };
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{formatDate(post.date)}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
