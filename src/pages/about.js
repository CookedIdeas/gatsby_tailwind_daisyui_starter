import React from 'react';
import Layout from '../1_components/2_Layout/Layout';
import Seo from '../1_components/1_Seo_Head/Seo';
import HeroImage from '../1_components/HeroImage';
import HeroContent from '../1_components/HeroContent';

const about = () => {
  return (
    <Layout>
      <section className="page-hero">
        <HeroContent
          title="About us"
          text="Firmament them set yielding, them fruitful. In. Set let for spirit blessed all without image likeness heaven over made fly let very bring appear great one likeness it. Winged."
        />
        <HeroImage page="about" />
      </section>
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
