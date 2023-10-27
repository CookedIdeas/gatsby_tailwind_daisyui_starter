/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Site title`,
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
        path: `${__dirname}/src/0_images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WebSite logo`,
        short_name: `logo`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/0_assets/favicon/logo.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
