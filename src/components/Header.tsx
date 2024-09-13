'use client';

import { useEffect, useRef } from 'react';
import { slideIn } from '@/animations';

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      slideIn(headerRef.current, 'right');
    }
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed z-10 font-mono flex items-center w-full text-slate-800 bg-slate-50 p-2"
      >
        <h1 className="mr-auto ml-3 text-2xl font-bold ">Yosuke Kuroda</h1>
        <nav>
          <ul className="flex items-center gap-2 ml-3 mr-3">
            <li className="p-2 transition inline-block rounded-full duration-150 ease-in hover:bg-cyan-200 hover:text-cyan-600">
              <a href="#top">Top</a>
            </li>
            <li className="p-2 transition inline-block rounded-full duration-150 ease-in hover:bg-cyan-200 hover:text-cyan-600">
              <a href="#about">About</a>
            </li>
            <li className="p-2 transition inline-block rounded-full duration-150 ease-in hover:bg-cyan-200 hover:text-cyan-600">
              <a href="#concept">Concept</a>
            </li>
            <li className="font-bold p-2 transition inline-block rounded-full duration-150 ease-in hover:bg-cyan-200 hover:text-cyan-600">
              <a href="#extra">Extra</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
