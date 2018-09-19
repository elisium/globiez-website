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
        path: `${__dirname}/src/vacancies`,
      },
    },
    {
      "resolve": `gatsby-transformer-remark`,
      "options": {
        "excerpt_separator": `<!-- end -->`
      }
    },
    {
      resolve: 'gatsby-plugin-pathdata',
      options: {
        matchNodeType: 'MarkdownRemark',
        extract: [
          {
            name: 'path',
            selector: /.+\/([\w\_\-\.\d\s]+)\.md$/,
            replacer: '$1'
          }
        ]
      }
    },
    'gatsby-plugin-netlify-cms'
  ],
}
