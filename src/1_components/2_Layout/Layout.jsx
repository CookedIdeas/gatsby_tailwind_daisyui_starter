import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[90vh] py-12 md:py-20 px-5 sm:px-10 md:px-20">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
