import React from 'react';
import Layout from '../1_components/2_Layout/Layout';
import Seo from '../1_components/1_Seo_Head/Seo';

const products = () => {
  return (
    <Layout>
      <h1>Page 2</h1>
    </Layout>
  );
};
export default products;

export const Head = () => (
  <Seo
    pageTitle="Products"
    pageDescription={'Discover our products.'}
    pagePathname={'products'}
  />
);
