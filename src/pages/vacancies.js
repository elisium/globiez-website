import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Layout from '../components/layout';

import styles from './styles/vacancies.module.css';

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className="row">
        <aside className="left-panel col col-4-of-12 col-4-of-8">
          <h1>Vacancies</h1>
          <div className="row-nested">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <h3 className={styles.vacancies_item} key={node.id}><Link to={`/vacancies/${node.fields.path}`}>{node.frontmatter.title}</Link></h3>
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
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          fields {
            path
          }
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