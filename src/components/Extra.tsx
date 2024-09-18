'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { animateOnScroll, slideIn } from '@/animations';

const Extra: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      animateOnScroll(elementRef.current, () =>
        slideIn(elementRef.current, 'right', 3000)
      );
    }
  }, []);
  return (
    <div
      id="extra"
      ref={elementRef}
      className="flex items-center justify-center p-5 bg-slate-50"
    >
      <div className="shadow-xl rounded-lg p-10 text-center bg-white max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Extra
        </h1>
        <Image
          src="/images/bonus.png"
          alt="bonus"
          width={100}
          height={100}
          className="rounded-full mx-auto mb-4"
        />
        <div className="text-left">
          <p className="text-base sm:text-lg font-semibold">サイト名:</p>
          <span className="text-sm sm:text-lg text-gray-600 mb-2 block hover:text-blue-500 underline">
            <a
              href="https://prameter-with-spotify-audio-features.vercel.app/"
              target="_blank"
            >
              parameter with spotify audio features
            </a>
          </span>
          <p className="text-base sm:text-lg font-semibold">概要:</p>
          <span className="text-sm sm:text-lg text-gray-600 mb-2 block">
            SpotifyAPIを使用したサイトになります。<br></br>
            楽曲の音響情報を視覚的に確認できたら面白いかなと感じたため制作しました。
            <br></br>
            試作段階ですが楽しんでいただけると幸いです。
          </span>
          <p className="text-base sm:text-lg font-semibold">技術:</p>
          <span className="text-sm sm:text-lg text-gray-600 mb-2 block">
            フレームワーク - next.js<br></br>
            css - tailwindcss<br></br>
            デプロイ - vercel<br></br>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Extra;
