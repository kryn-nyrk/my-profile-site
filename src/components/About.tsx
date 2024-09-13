'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { animateOnScroll, slideIn } from '@/animations';

const About: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      animateOnScroll(elementRef.current, () =>
        slideIn(elementRef.current, 'left', 3000)
      );
    }
  }, []);

  return (
    <div
      id="about"
      ref={elementRef}
      className="flex items-center justify-center p-5 bg-slate-50"
    >
      <div className="shadow-xl rounded-lg p-10 text-center bg-white max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About</h1>

        <Image
          src="/images/about.png"
          alt="about"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4"
        />
        <a href="https://github.com/kryn-nyrk" target="_blank">
          <Image
            src="/images/Github-Logo-1--Streamline-Ultimate.png"
            alt="github"
            width={30}
            height={30}
            className="rounded-full mx-auto mb-4"
          />
        </a>

        <div className="text-left">
          <p className="text-lg font-semibold">名前:</p>
          <span className="text-lg text-gray-600 mb-2 block">
            黒田洋介（くろだようすけ）
          </span>
          <p className="text-lg font-semibold">会社:</p>
          <span className="text-lg text-gray-600 mb-2 block">
            S株式会社 - 2024/08/31まで
          </span>
          <p className="text-lg font-semibold">担当業務:</p>
          <ul className="text-lg text-gray-600 mb-2 block">
            <li>美容室向けポスレジシステムの導入</li>
            <li>クライアントへの指導及び操作説明</li>
            <li>お問い合わせに対しての電話・リモート対応</li>
            <li>ハード不良時の訪問対応</li>
          </ul>
          <p className="text-lg font-semibold">スキル:</p>
          <span className="text-lg text-gray-600 mb-2 block">
            javascript typescript next.js react gitを独学で学習しております。
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
