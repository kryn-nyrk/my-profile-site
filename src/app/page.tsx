import Image from 'next/image';
import React from 'react';
import Header from '@/components/Header';
import Top from '@/components/Top';
import About from '@/components/About';
import Concept from '@/components/Concept';
import Extra from '@/components/Extra';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Top />
      <About />
      <Concept />
      <Extra />
    </React.Fragment>
  );
}
