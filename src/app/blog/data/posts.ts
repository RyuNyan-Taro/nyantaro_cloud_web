import { BlogPost, DetailedBlogPost } from '../types';

// Create a complete blog post dataset with all fields
export const blogPostsData: (BlogPost & { content: string })[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    description: 'Why I start the site with Next.js and why I don\'t use a CMS like WordPress or Ghost.',
    content: 'とりあえずcodeに直書きでblogを書いてみるけど、もう面倒。blog編集用のconsoleアプリを別で作成して、' +
        'それもクラウドに保存して、こっちではAPI経由で取得する形にしたいなぁ、、と思っているだけ思っている。いやいや、今の時代色んなブログプラットフォームあるんやから、' +
        '素直にそちらを使えば良いじゃない、ってそれはもう、そう！異論なし。そうなんだけど、、、なんかさぁ、プラットフォーマーに乗っかるよりも、自分で作る方が楽しいじゃない？面倒だけど。' +
        'というかやりたくないけど。というかとにかく面倒だけど。ついでにね、実装も学べるじゃない？一石二鳥じゃない？二兎を追うものは一兎をも得ないんじゃないかって？、、確かに。異論なし。' +
        '今の所は兎を取り逃している、気がしているけど、まぁいいや。',
    date: '2024-04-24',
    readTime: '5 min read',
    slug: 'getting-started-with-nextjs',
  },
  {
    id: '2',
    title: 'Why TypeScript is Worth Learning',
    description: 'Discover the benefits of TypeScript and how it can improve your development experience.',
    content: 'This is a sample blog post about the benefits of TypeScript.',
    date: '2023-09-20',
    readTime: '8 min read',
    slug: 'why-typescript-is-worth-learning',
  },
  {
    id: '3',
    title: 'Styling in Modern Web Applications',
    description: 'Explore different styling approaches for modern web applications, including Tailwind CSS.',
    content: 'This is a sample blog post about styling in modern web applications.',
    date: '2023-08-05',
    readTime: '6 min read',
    slug: 'styling-in-modern-web-applications',
  },
  {
    id: '4',
    title: 'Building Responsive Layouts',
    description: 'Learn techniques for creating responsive layouts that work across all device sizes.',
    content: 'This is a sample blog post about building responsive layouts.',
    date: '2023-07-12',
    readTime: '7 min read',
    slug: 'building-responsive-layouts',
  },
  {
    id: '5',
    title: 'State Management in React Applications',
    description: 'Compare different state management solutions for React applications.',
    content: 'This is a sample blog post about state management in React applications.',
    date: '2023-06-28',
    readTime: '10 min read',
    slug: 'state-management-in-react',
  },
];

// Helper functions for retrieving data in different formats
export const getBlogPosts = (): BlogPost[] => {
  return blogPostsData.map(({ id, title, description, date, readTime, slug }) => ({
    id, title, description, date, readTime, slug
  }));
};

export const getDetailedBlogPosts = (): DetailedBlogPost[] => {
  return blogPostsData.map(({ id, title, content, date, slug }) => ({
    id, title, content, date, slug
  }));
};

export const getBlogPostBySlug = (slug: string): DetailedBlogPost | undefined => {
  const post = blogPostsData.find((post) => post.slug === slug);
  if (!post) return undefined;
  
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    date: post.date,
    slug: post.slug
  };
};

// Format date to a more readable format
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ja-JP', options);
}
