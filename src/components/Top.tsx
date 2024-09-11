'use client';

import { useEffect, useRef } from 'react';
import { slideIn } from '@/animations';

const Top = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      slideIn(imageRef.current, 'top', 3000);
    }
  }, []);

  return (
    <div
      id="top"
      ref={imageRef}
      className="h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/top.png)' }}
    ></div>
  );
};

export default Top;
