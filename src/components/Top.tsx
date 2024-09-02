'use client';

import { useEffect, useRef } from 'react';
import { slideIn } from '@/animations';

const Top = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      slideIn(imageRef.current, 'top', 3000);
    }
    if (paragraphRef.current) {
      slideIn(paragraphRef.current, 'bottom', 5000);
    }
  }, []);

  return (
    <div
      id="top"
      ref={imageRef}
      className="h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/top.png)' }}
    >
      <div
        ref={paragraphRef}
        className="flex justify-center items-center h-full"
      >
        <p className="p-2 text-2xl font-bold font-serif text-blue-900">
          yosuke kuroda's site
        </p>
      </div>
    </div>
  );
};

export default Top;
