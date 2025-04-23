import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
      <p className="text-gray-600 mb-6">The blog post you&#39;re looking for doesn&#39;t exist or has been moved.</p>
      <Link 
        href="/blog" 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Back to Blog
      </Link>
    </div>
  );
}
