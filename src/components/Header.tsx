'use client';

import { useEffect, useState, useRef } from 'react';
import { slideIn } from '@/animations';

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (headerRef.current) {
      slideIn(headerRef.current, 'right');
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed z-10 font-mono flex items-center w-full text-slate-800 bg-slate-50 p-2"
      >
        <h1 className="mr-auto ml-3 text-2xl font-bold ">Yosuke Kuroda</h1>
        {/*　ハンバーガーメニュー */}
        <button className="block lg:hidden mr-3" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* メニューリスト */}
        <nav
          className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-2 ml-3 mr-3">
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
