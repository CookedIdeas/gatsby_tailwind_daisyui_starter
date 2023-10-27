import React from 'react';
import Layout from '../1_components/2_Layout/Layout';
import Seo from '../1_components/1_Seo_Head/Seo';
import HeroImage from '../1_components/HeroImage';
import HeroContent from '../1_components/HeroContent';

const services = () => {
  return (
    <Layout>
      <section className="page-hero">
        <HeroImage page="services" />
        <HeroContent
          title="Our services"
          text="Behold moving very you moveth man. Whose had cattle fruit day their sixth won't, their tree light gathering you're greater without be gathering have lights face made also from. Wherein."
        />
      </section>
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
