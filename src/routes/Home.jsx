import React from 'react';
import Projects from '../patterns/Projects';
import Location from '../patterns/Location';
import Services from '../patterns/Services';
import About from '../patterns/About';
import Intro from '../patterns/Intro';
import Header from './../patterns/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className='className="bg-zinc-50 pt-[70px]'>
        <Intro />
        <Projects />
        <About />
        <Services />
      </main>
    </>
  );
};

export default Home;
