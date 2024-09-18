'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { slideIn } from '@/animations';

const Top = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      slideIn(imageRef.current, 'top', 2500);
    }
  }, []);

  return (
    <div id="top" ref={imageRef} className="relative h-screen bg-slate-200">
      <Image
        src="/images/adorable-white-black-kitty-with-monochrome-wall-her.jpg"
        alt="top"
        fill
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <p className="text-white text-3xl md:text-4xl font-bold font-mono">
          Yosuke Kuroda
        </p>
      </div>
    </div>
  );
};

export default Top;
