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
    <main className="min-h-screen bg-gradient-to-b from-pink-300 via-red-200 to-pink-100 flex flex-col items-center px-4 py-12">
      <div className='flex flex-1 flex-col items-center justify-center text-center gap-2'>  
        <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-700 mb-10 text-center">
            Aishu's Valentine's Gifts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
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
                h-48
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
                <p className="text-lg mt-2 ml-4 mr-4 text-pink-600 font-semibold">
                Tap to reveal...
                </p>
            </div>
            ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-12">
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
