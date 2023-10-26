import React from 'react';
import Layout from '../1_components/2_Layout/Layout';
import Seo from '../1_components/1_Seo_Head/Seo';

const services = () => {
  return (
    <Layout>
      <h1>Page 1</h1>
    </Layout>
  );
};
export default services;

export const Head = () => (
  <Seo
    pageTitle="Services"
    pageDescription={'Discover our services.'}
    pagePathname={'services'}
  />
);
