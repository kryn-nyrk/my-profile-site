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
        className="fixed z-10 font-mono flex w-full text-slate-800 bg-slate-50 p-2"
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

/*
return (
    <>
      <div
        ref={headerRef}
        className="relative z-10 flex items-center justify-center p-4 m-4"
      >
        <div className=" fixed flex items-end justify-end space-x-2 rounded-full bg-white p-2 overflow-hidden overflow-x-scroll w-full">
          <a
            href="#top"
            className="transition inline-block rounded-full bg-white px-4 py-2 font-medium text-gray-800 shadow duration-150 ease-in hover:bg-indigo-200 hover:text-indigo-600"
          >
            Top
          </a>

          <a
            href="#about"
            className="transition inline-block rounded-full px-4 py-2 font-medium text-gray-800 duration-150 ease-in hover:bg-indigo-200 hover:text-indigo-600"
          >
            About
          </a>

          <a
            href="#concept"
            className="transition inline-block rounded-full px-4 py-2 font-medium text-gray-800 duration-150 ease-in hover:bg-indigo-200 hover:text-indigo-600"
          >
            Concept
          </a>

          <a
            href="#extra"
            className="transition inline-block rounded-full px-4 py-2 font-medium text-gray-800 duration-150 ease-in hover:bg-indigo-200 hover:text-indigo-600"
          >
            Extra
          </a>
        </div>
      </div>
    </>
  );
 */
