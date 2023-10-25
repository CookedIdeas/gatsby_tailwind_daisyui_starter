import * as React from 'react';
import Seo from '../1_components/1_HTML_Head/Seo';
import Layout from '../1_components/2_Layout/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Main page</h1>
      {/* <div className="bg-slate-500">DIV</div> */}
      {/* <button className="btn btn-primary">Button</button> */}
      <p>
        Nostrud pariatur est non do laborum reprehenderit dolore proident
        aliquip eu quis ullamco tempor. Aliqua voluptate cupidatat quis Lorem
        laborum qui do ipsum nostrud fugiat. Incididunt laborum ullamco
        consequat est cupidatat officia exercitation ea esse qui laboris velit
        consequat adipisicing. Aliquip reprehenderit aliquip deserunt sit do
        quis irure aliquip proident consectetur consectetur culpa. Ad veniam
        sunt dolor id anim consectetur Lorem laborum proident veniam
        reprehenderit. Sint id eiusmod esse eiusmod officia aute est cillum
        occaecat qui. Reprehenderit sunt tempor voluptate id ullamco laboris.
      </p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
