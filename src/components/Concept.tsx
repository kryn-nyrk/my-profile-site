'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { animateOnScroll, fadeIn } from '@/animations';

const Concept: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      animateOnScroll(elementRef.current, () =>
        fadeIn(elementRef.current, 3000)
      );
    }
  }, []);

  return (
    <div
      id="concept"
      ref={elementRef}
      className="flex items-center justify-center p-5"
    >
      <div className="shadow-xl rounded-lg p-10 text-center bg-white max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Concept</h1>
        <Image
          src="/images/concept.png"
          alt="concept"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4"
        />
        <div className="text-left">
          <p className="text-lg font-semibold">技術:</p>
          <span className="text-lg text-gray-600 mb-2 block">
            javascriptのフレームワークであるnext.jsを使用しています。<br></br>
            cssはtailwindcssでデザインをしました。<br></br>
            アニメーションはanime.jsを使用してエフェクトを実装しました。
          </span>
          <p className="text-lg font-semibold">デザイン:</p>
          <span className="text-lg text-gray-600 mb-2 block">
            シンプルでわかりやすいサイト構成を心掛けました。
          </span>
        </div>
      </div>
    </div>
  );
};

export default Concept;
