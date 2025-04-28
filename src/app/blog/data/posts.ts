import { BlogPost } from '../types';

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
    date: '2025-04-24',
    readTime: '5 min read',
    slug: 'getting-started-with-nextjs',
  },
  {
    id: '2',
    title: 'Flutter part is good',
    description: 'Discover the benefits of TypeScript and how it can improve your development experience.',
    content: 'Fullter（というかDart）には["part / part of"という構文があり](https://zenn.dev/harx/articles/09d569d011bb4f)、これを使用することで、' +
        'プライベートなウィジェットを別ファイルとして管理することが出来るらしい。なんて便利なんだ。しかもこの場合、親（part of）でimportしたmoduleは子（part）でも使用出来るので、再度importする必要も無くなる。' +
        'なんて便利なんだ。でもこれ、親子関係が不明確だとかえって混乱を来すのでは？と思ったのだが、そこはちゃんとフォローされていた。なんて便利なんだ！\n' +
        '折角だし、既存のcodeをちょっとこれ使ってrefactoringしようかな。あ、、でもその前にIDEを変更したから、build環境を再度構築する必要があるなぁ、、、うーん、面倒。',
    date: '2025-04-29',
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
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Format date to a more readable format
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ja-JP', options);
}
