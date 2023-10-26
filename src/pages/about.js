import React from 'react';
import Layout from '../1_components/2_Layout/Layout';
import Seo from '../1_components/1_Seo_Head/Seo';

const about = () => {
  return (
    <Layout>
      <h1>About page</h1>
    </Layout>
  );
};
export default about;

export const Head = () => (
  <Seo
    pageTitle="About us"
    pageDescription={'Discover who we are.'}
    pagePathname={'about'}
  />
);
