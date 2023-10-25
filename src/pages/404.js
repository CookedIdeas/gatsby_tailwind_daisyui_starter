import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../1_components/2_Layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] place-items-center grid items-center">
        <div className="text-center flex flex-col gap-4">
          <span className="text-9xl">404</span>
          <h1 className="text-2xl font-semibold">
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

export const Head = () => <title>Not found</title>;
