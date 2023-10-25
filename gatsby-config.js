/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Your site title`,
    description:
      "Here's your site description. A beautiful description for a beautiful website, truly.",
    lang: 'en',
    author: 'Myself',
    domain: `https://gabrielgourcerol.com/gatsby_starter`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
