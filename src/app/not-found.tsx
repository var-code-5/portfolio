'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render client-side content after mounting
  if (!isMounted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link 
        href="/" 
        className="bg-cpurple text-white px-6 py-3 rounded-lg hover:bg-cgreen transition-colors duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
