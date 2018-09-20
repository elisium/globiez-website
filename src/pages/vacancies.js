import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import classNames from 'classnames';

import styles from './styles/vacancies.module.css';

const IndexPage = ({ data, location }) => {
  const { allMarkdownRemark, markdownRemark } = data;
  const currentVacancie = markdownRemark ? markdownRemark : allMarkdownRemark.edges[0].node;
  currentVacancie.html = currentVacancie.html.replace(/(<\/?h)[1-6](>)/g, "$13$2"); // make sure all headings inside a vacancie are h3
  const currentPath = currentVacancie.fields.fullpath;

  return (
    <Layout currentPath={currentPath}>
      <div className="row">
        <aside className="left-panel col col-4-of-12 col-4-of-8">
          <h1>Vacancies</h1>
          <div className="row-nested">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <h3 className={classNames(styles.vacancies_item, {
                [styles.current_vacancie]: node.fields.fullpath === currentPath
              })} key={node.id}>
                <Link to={node.fields.fullpath}>{node.frontmatter.title}</Link>
              </h3>
            ))}
          </div>
        </aside>
        <div className="right-panel col col-8-of-12 col-4-of-8">
          <div className="row row-nested">
            <div className="col col-4-of-12 col-4-of-8">
              <h2>{currentVacancie.frontmatter.title}</h2>
            </div>
          </div>
          <div className="row row-nested">
            <div className="col col-4-of-12 col-4-of-8">
              <div dangerouslySetInnerHTML={{ __html: currentVacancie.html }} />
            </div>
            <div className="col col-4-of-12 col-4-of-8">
              <h3>Apply</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
)}

export default IndexPage;

export const vacancies = graphql`
  query($path: String!) {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            fullpath
          }
          frontmatter {
            title
          }
          html
        }
      }
    }
    markdownRemark(fields: { fullpath: { eq: $path } }) {
      fields {
        fullpath
      }
      frontmatter {
        title
      }
      html
    }
  }
`;