'use client';

import { useRouter } from 'next/navigation';

export default function GiftsPage() {
  const router = useRouter();

  const gifts = [
    { name: 'hugs', no: 1 },
    { name: 'vouchers', no: 2 },
    { name: 'roses', no: 3 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-300 via-red-200 to-pink-100 flex flex-col items-center px-4 py-8">
      
      {/* Content container */}
      <div className='flex flex-1 flex-col items-center justify-start text-center gap-6 w-full max-w-5xl'>
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-700 mb-6 text-center">
          Aishu's Valentine's Gifts
        </h1>

        {/* Gifts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {gifts.map((gift) => (
            <div
              key={gift.name}
              onClick={() => router.push(`/gifts/${gift.name}`)}
              className="
                cursor-pointer
                bg-white/20 backdrop-blur-lg border border-white/30
                rounded-2xl
                shadow-xl
                flex flex-col items-center justify-center
                h-44 sm:h-48
                text-5xl
                transition
                hover:scale-105
                active:scale-95
                hover:shadow-2xl
              "
            >
              🎁
              <p className="text-lg mt-4 text-pink-600 font-semibold">
                Gift {gift.no}
              </p>
              <p className="text-sm sm:text-lg mt-2 mx-4 text-pink-600 font-semibold">
                Tap to reveal...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="fixed bottom-15 left-0 right-0 flex justify-center z-20">
        <button
          onClick={() => router.push('/hvd')}
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
          ⬅ Back to Valentine's Message
        </button>
      </div>
    </main>
  );
}
