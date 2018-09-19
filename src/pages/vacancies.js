import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="row">
        <aside className="left-panel col col-4-of-12 col-4-of-8">
          <h1>Vacancies</h1>
        </aside>
        <div className="right-panel col col-8-of-12 col-4-of-8">
        </div>
      </div>
    </Layout>
)}

export default IndexPage;

export const query = graphql`
  query VacanciesQuery {
    allMarkdownRemark(limit: 4) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            tags
          }
          html
        }
      }
    }
  }
`;