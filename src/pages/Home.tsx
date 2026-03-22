import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services limit={3} />
      <Projects limit={3} />
      <Contact />
    </main>
  );
}
