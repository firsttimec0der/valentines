'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HugsPage() {
  const router = useRouter();

  const videos = [
    "/gifs/hug1.mp4",
    "/gifs/kiss1.mp4",
    "/gifs/hug2.mp4",
  ];

  useEffect(() => {
    const container = document.getElementById('gif-container');

    for (let i = 0; i < 50; i++) {
      const video = document.createElement('video');
      video.src = videos[Math.floor(Math.random() * videos.length)];
      video.className = 'floating-gif';
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;

      // Safe vertical range to avoid title and button
      const topSafeMin = 17; // % from top
      const topSafeMax = 75; // % from top
      video.style.top = (Math.random() * (topSafeMax - topSafeMin) + topSafeMin) + 'vh';

      video.style.left = Math.random() * 90 + 'vw'; // keep within screen width
      video.style.width = Math.random() * 60 + 60 + 'px';

      video.style.position = 'absolute';
      video.style.animation = `floatAround ${Math.random() * 10 + 10}s linear infinite`;

      container?.appendChild(video);
    }
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-300 via-red-200 to-pink-100">

      {/* Title */}
      <h1 className="relative z-10 text-3xl sm:text-4xl font-extrabold text-pink-700 text-center pt-10">
        Gift 1: All My Hugs & Kisses
      </h1>

      {/* Floating video container */}
      <div
        id="gif-container"
        className="absolute inset-0"
      />

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