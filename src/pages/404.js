import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../1_components/2_Layout/Layout';
import Seo from '../1_components/1_Seo_Head/Seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] grid place-items-center">
        <div className="text-center flex flex-col gap-4">
          <span className="text-8xl sm:text-9xl">404</span>
          <h1 className="sm:text-2xl font-semibold">
            Oups, there's nothing here...
          </h1>
          <div className="pt-4">
            <Link className="btn btn-primary" to="/">
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => (
  <Seo
    pageTitle="Error 404"
    pageDescription={'Does this page needs a description ?'}
    pagePathname={null}
  />
);
