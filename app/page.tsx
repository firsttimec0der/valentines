"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [clickCount, setClickCount] = useState(0);
  const maxClicks = 5;

  const noButtonSize = Math.max(100 - clickCount * 15, 0);
  const yesButtonSize = 100 + clickCount * 15;

  const router = useRouter();

  const handleNoClick = () => {
    if (clickCount < maxClicks) setClickCount(clickCount + 1);
  };

  const handleYesClick = () => {
    router.push('/hvd');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-300 via-red-200 to-pink-100 p-6 overflow-hidden">

    {/* headline */}
    <h1 className="relative z-10 text-4xl sm:text-6xl md:text-7xl font-extrabold mb-8 text-pink-800 text-center drop-shadow-xl">
      Aishu, will you be my valentine?
    </h1>

    {/* buttons */}
    <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 z-10">
      <button
        onClick={handleYesClick}
        style={{
          width: `${yesButtonSize}px`,
          height: `${yesButtonSize / 2}px`,
        }}
        className="bg-green-700 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      >
        YESS
      </button>

      {clickCount < maxClicks && (
        <div className="flex justify-center">
          <button
            onClick={handleNoClick}
            style={{
              width: `${noButtonSize}px`,
              height: `${noButtonSize / 2}px`,
            }}
            className="bg-red-800 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            no
          </button>
        </div>
      )}
    </div>

    {clickCount >= maxClicks && (
      <p className="mt-6 text-xl sm:text-xl text-pink-700 font-semibold relative z-10 text-center">
        SYSTEM ERROR: DUE TO ISSUES WITH YOUR INTERNET CONNECTION, ONLY ONE BUTTON REMAINS (I guess you have to click it now)
      </p>
    )}
    {clickCount == 1 && (
      <p className="mt-6 text-2xl sm:text-xl text-pink-700 font-semibold relative z-10 text-center">
        oops, you accidentally misclicked. Please try again!
        <div className="flex justify-center items-center">
          <img
            src="/stickers/cat grinning.webp"
            alt="Animated Valentine Sticker"
            className="w-36 h-36"
          />
        </div>
      </p>
    )}
    {clickCount == 2 && (
      <p className="mt-6 text-2xl sm:text-xl text-pink-700 font-semibold relative z-10 text-center">
        aishu, please try again :(
        <div className="flex justify-center items-center">
          <img
            src="/stickers/sad cat heart.webp"
            alt="Sad Cat Sticker"
            className="w-36 h-36"
          />
        </div>
      </p>
    )}
    {clickCount == 3 && (
      <p className="mt-6 text-2xl sm:text-xl text-pink-700 font-semibold relative z-10 text-center">
        AISHU STOP TRYNA RAGEBAIT ME!
        <div className="flex justify-center items-center">
          <img
            src="/stickers/argh.webp"
            alt="Argh Sticker"
            className="w-36 h-36"
          />
        </div>
      </p>
    )}
    {clickCount == 4 && (
      <p className="mt-6 text-2xl sm:text-xl text-pink-700 font-semibold relative z-10 text-center">
        babyyyy, pleaseeee... I'm begging youuu
        <div className="flex justify-center items-center">
          <img
            src="/stickers/sad aishu.webp"
            alt="Sad Aishu Sticker"
            className="w-36 h-36"
          />
        </div>
      </p>
    )}
  </div>
  );
}
