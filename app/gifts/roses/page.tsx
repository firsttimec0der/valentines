'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HugsPage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-300 via-red-200 to-pink-100">

      {/* Title */}
    <h1 className="relative z-10 text-3xl sm:text-4xl font-extrabold text-pink-700 text-center pt-10">
        Gift 3: A Bouquet of Roses 
    </h1>

      {/* Floating GIF container */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
            src="/photos/roses.jpg"
            alt="Roses"
            className="w-100 h-100w-3/4 max-w-xs h-auto mx-auto"
          />
    </div>

      {/* Back Button */}
      <div className="fixed bottom-15 left-0 right-0 flex justify-center z-20">
        <button
          onClick={() => router.push('/gifts')}
          className="
            px-6 py-3
            rounded-full
            bg-pink-600
            text-white
            font-semibold
            shadow-xl
            hover:bg-pink-700
            active:scale-95
            transition
          "
        >
          ⬅ Back to Other Gifts
        </button>
      </div>

    </main>
  );
}
