'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Voucher = {
  title: string;
  description: string;
};

export default function FutureVouchersPage() {
  const router = useRouter();

  const vouchers: Voucher[] = [
    {
      title: "Massage",
      description: "I will be your personal masseur",
    },
    {
      title: "Snacks Craving Pass",
      description: "I will get you your favourite snacks",
    },
    {
      title: "Lazy Day Together",
      description: "We will laze in bed all day together",
    },
    {
      title: "Emergency Comfort Call",
      description: "I will give you instant emotional support",
    },
  ];

  const [flipped, setFlipped] = useState<boolean[]>(
    Array(vouchers.length).fill(false)
  );

  const handleFlip = (index: number) => {
    const updated = [...flipped];
    updated[index] = !updated[index];
    setFlipped(updated);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-300 via-red-200 to-pink-100 px-4 py-10">

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-700 text-center mb-10">
        Valentine's Vouchers
      </h1>

      {/* Voucher Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {vouchers.map((voucher, index) => (
          <div
            key={index}
            onClick={() => handleFlip(index)}
            className="relative h-36 cursor-pointer perspective"
            >
            <div
                className={`relative w-full h-full duration-500 ${
                flipped[index] ? 'rotate-y-180' : ''
                }`}
                style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s',
                }}
            >
                {/* Front */}
                <div
                className="absolute inset-0 bg-pink-400 text-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-4 text-center"
                style={{
                    backfaceVisibility: 'hidden',
                }}
                >
                <p className="font-bold text-2xl text-pink-900">
                    {voucher.title}
                </p>
                <p className="text-lg">
                    {voucher.description}
                </p>
                <p className='mt-3'>click to redeem</p>
                </div>

                {/* Back */}
                <div
                className="absolute inset-0 bg-white rounded-2xl shadow-xl flex items-center justify-center p-6 text-center"
                style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                }}
                >
                <p className="text-pink-600 font-semibold text-base">
                    Redeemable anytime. <br />
                    No expiry. Unlimited validity.
                </p>
                <p className="text-pink-600 text-base ml-4">
                    click to view voucher
                </p>
                </div>
            </div>
            </div>
        ))}

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
