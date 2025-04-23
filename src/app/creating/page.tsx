import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Under Construction | My Website',
  description: 'This page is currently being created',
};

export default function CreatingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-8">Page Under Construction</h1>

      <div className="flex flex-col items-center justify-center">
        <svg
          className="w-16 h-16 text-yellow-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <p className="text-xl font-semibold">
          This page is currently being created
        </p>
        <p>
          We&apos;re working hard to bring you new content. Please check back soon!
        </p>
      </div>

      <Link 
        href="/"
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
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
        Return to Home
      </Link>
    </div>
  );
}
