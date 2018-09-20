const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const vacancieTemplate = path.resolve(`src/pages/vacancies.js`)

    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
  `).then(result => {
            if (result.errors) {
                return Promise.reject(result.errors)
            }

            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: `/vacancies/${node.fields.path}`,
                    component: vacancieTemplate,
                    context: {}, // additional data can be passed via context
                })
            })
        })
}