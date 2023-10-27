import React from 'react';
import Layout from '../1_components/2_Layout/Layout';
import Seo from '../1_components/1_Seo_Head/Seo';
import HeroImage from '../1_components/HeroImage';
import HeroContent from '../1_components/HeroContent';

const products = () => {
  return (
    <Layout>
      <section className="page-hero">
        <HeroContent
          title="Our products"
          text="Unto waters, male fill had stars fruit to they're yielding beginning first years every had she'd blessed which forth Seasons appear one said in you'll their light sea replenish herb grass moved rule hath. Divide hath hath together seas cattle blessed."
        />
        <HeroImage page="products" />
      </section>
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
