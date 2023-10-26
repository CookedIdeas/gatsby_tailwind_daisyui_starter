import * as React from 'react';
import Layout from '../1_components/2_Layout/Layout';
import Seo from '../1_components/1_Seo_Head/Seo';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout>
      <section className="mt-8 grid lg:grid-cols-2 lg:gap-x-6">
        <div className="flex flex-col gap-8">
          <h1 className="">Welcome</h1>
          {/* <div className="bg-slate-500">DIV</div> */}
          {/* <button className="btn btn-primary">Button</button> */}
          <p className="text-lg leading-6 md:leading-8 max-w-xl">
            Nostrud pariatur est non do laborum reprehenderit dolore proident
            aliquip eu quis ullamco tempor. Aliqua voluptate cupidatat quis
            Lorem laborum qui do ipsum nostrud fugiat. Incididunt laborum
            ullamco consequat est cupidatat officia exercitation ea esse qui
            laboris velit consequat adipisicing.
          </p>
          <div className="flex flex-row gap-4">
            <button className="btn btn-primary">Bouton</button>
            <button className="btn btn-secondary">Bouton</button>
          </div>
        </div>
        <div className="h-96 w-full place-items-end hidden lg:grid">
          <StaticImage
            src="../0_assets/landscape.jpg"
            alt="logo"
            placeholder="blurred"
            layout="constrained"
            imgClassName="object-cover"
            className="h-96 w-96 rounded-s-[3rem] rounded-br-[3rem] overflow-hidden"
          />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo pageTitle="Home" pageDescription={null} pagePathname={null} />
);
