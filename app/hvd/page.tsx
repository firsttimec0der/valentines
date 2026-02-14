'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HvdPage() {
  useEffect(() => {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1'];

    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = Math.random() * 2 + 's';
      container?.appendChild(piece);
    }
  }, []);

  const router = useRouter();

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-pink-300 via-red-200 to-pink-100 overflow-hidden">
      
      {/* Confetti */}
      <div
        id="confetti-container"
        className="pointer-events-none absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col px-4">

        {/* TOP */}
        <div className="flex flex-col items-center pt-20 gap-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-700">
            YAYYYYY!!!
          </h1>

          <img
            src="/stickers/cat jumping.webp"
            alt="Cat Jumping Sticker"
            className="w-32 sm:w-36 h-auto"
          />
        </div>

        {/* CENTER */}
        <div className="flex flex-1 flex-col items-center justify-center text-center gap-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-800">
            HAPPY VALENTINE&apos;S DAY,
          </h2>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-800">
            AISHU! 
          </h2>
          <p className="text-lg sm:text-xl text-pink-600 font-semibold mt-5">
            I LOVE YOU SO MUCH, MY FOREVER VALENTINE
          </p>
          <p className="text-md sm:text-xl text-pink-600 font-semibold mt-2">
            I am so glad we get to spend Valentine's together, despite the distance between us.<br></br>
            You make it feel special even from so far away. <br></br>
            I can't wait to spend all my future Valentine's with you :)
          </p>
          <img
            src="/stickers/happy cat heart-1.jpg"
            alt="Happy Cat Heart Sticker"
            className="w-40 sm:w-40 h-auto mt-5"
          />
        </div>

        {/* BOTTOM */}
        <div className="pb-20 flex justify-center">
          <button
            className="
              px-8 py-4 rounded-full
              bg-gradient-to-r from-pink-600 to-red-500
              text-white text-md font-extrabold
              shadow-2xl
              animate-pulse
              hover:scale-110
              active:scale-95
              transition-all
              relative
              before:absolute before:inset-0
              before:rounded-full
              before:bg-pink-400/40
            "
            onClick={() => router.push('/gifts')}
          >
            CLAIM YOUR VALENTINE&apos;S GIFTS 🎁
          </button>
        </div>

      </div>
    </main>
  );
}
