import React from 'react';
import Header from './patterns/Header';
import Footer from './patterns/Footer';
import Projects from './patterns/Projects';
import Location from './patterns/Location';
import Services from './patterns/Services';
import About from './patterns/About';
import Intro from './patterns/Intro';

const App = () => {
  return (
    <>
      <Header />
      <main className="bg-zinc-50 pt-[70px]">
        <Intro />
        <Projects />
        <About />
        <Services />
        <Location />
      </main>
      <Footer />
    </>
  );
};

export default App;
