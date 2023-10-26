import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Seo from '../1_Seo_Head/Seo';

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

export const Head = () => <Seo />;
