'use client';

import { useEffect, useRef } from 'react';
import { slideIn } from '@/animations';

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      slideIn(headerRef.current);
    }
  }, []);

  return (
    <>
      <div className="relative z-10 flex items-center justify-center p-4 m-4">
        <div className=" fixed flex items-end justify-end space-x-2 rounded-full bg-white p-2 overflow-hidden overflow-x-scroll w-full">
          <a
            href="#top"
            className="trasition inline-block rounded-full bg-white px-4 py-2 font-medium text-gray-800 shadow duration-150 ease-in hover:bg-indigo-200 hover:text-indigo-600"
          >
            Top
          </a>

          <a
            href="#about"
            className="trasition inline-block rounded-full px-4 py-2 font-medium text-gray-800 duration-150 ease-in hover:bg-indigo-200 hover:text-indigo-600"
          >
            About
          </a>

          <a
            href="#concept"
            className="trasition inline-block rounded-full px-4 py-2 font-medium text-gray-800 duration-150 ease-in hover:bg-indigo-200 hover:text-indigo-600"
          >
            Concept
          </a>

          <a
            href="#extra"
            className="trasition inline-block rounded-full px-4 py-2 font-medium text-gray-800 duration-150 ease-in hover:bg-indigo-200 hover:text-indigo-600"
          >
            Extra
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
