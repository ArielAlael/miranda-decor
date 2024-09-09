import React from 'react';
import Header from './patterns/Header';
import Footer from './patterns/Footer';

import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
