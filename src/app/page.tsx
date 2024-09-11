import React from 'react';
import Top from '@/components/Top';
import About from '@/components/About';
import Concept from '@/components/Concept';
import Extra from '@/components/Extra';

export default function Home() {
  return (
    <React.Fragment>
      <Top />
      <About />
      <Concept />
      <Extra />
    </React.Fragment>
  );
}
