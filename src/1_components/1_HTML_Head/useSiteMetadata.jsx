import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          domain
          lang
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
