import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import styles from './styles/vacancies.module.css';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="row">
        <aside className="left-panel col col-4-of-12 col-4-of-8">
          <h1>Vacancies</h1>
          <div className="row-nested">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <h3 className={styles.vacancies_item} key={node.id}>{node.frontmatter.title}</h3>
            ))}
          </div>
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
          }
          html
        }
      }
    }
  }
`;