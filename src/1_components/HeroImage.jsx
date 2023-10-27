import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';

const filterImageNode = (queriedEdges, pageName) => {
  return queriedEdges.filter(
    (edge) => edge.node.name.split('_')[0] === pageName
  );
};

const HeroImage = ({ page }) => {
  // query all images in folder 0_images/pages

  const query = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "pages" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                formats: WEBP
                quality: 100
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
            name
          }
        }
      }
    }
  `);
  const queryEdges = query.allFile.edges;

  const [image, setImage] = useState(null);

  // setImage by filtering queried images array with page name with filterImageNode function
  useEffect(() => {
    setImage(getImage(filterImageNode(queryEdges, page)[0].node));
  }, [queryEdges, page]);

  return (
    <div
      className={`${
        page === 'index' ? 'h-40' : 'h-64'
      } lg:h-96 w-full place-items-center grid order-1 lg:order-2`}
    >
      {image && (
        <GatsbyImage
          image={image}
          alt="yop"
          className="h-full w-full lg:w-96 rounded-s-[3rem] rounded-br-[3rem] overflow-hidden"
        />
      )}
    </div>
  );
};
export default HeroImage;
