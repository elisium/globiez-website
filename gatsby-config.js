module.exports = {
  siteMetadata: {
    title: 'Globiez',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      "resolve": `gatsby-transformer-remark`,
      "options": {
        "excerpt_separator": `<!-- end -->`
      }
    },
    'gatsby-plugin-netlify-cms'
  ],
}
