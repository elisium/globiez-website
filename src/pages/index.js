import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import TelegramButton from '../components/shared/telegramButton';
import styles from './styles/index.module.css';
import { Parser } from 'htmlparser2';

function getExcerpt(html) {
  const excerptLength = 350;
  let result = "";
  let currentTag = "";
  const parser = new Parser({
    onopentag: function (name) { currentTag = name },
    ontext: function (text) { if (currentTag === 'p') result += text; }
  });
  parser.write(html);
  parser.end();
  return `${result.substr(0, excerptLength)}…`;
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="row">
        <aside className="left-panel col col-4-of-12 col-4-of-8">
          <h1>About us</h1>
          <p>There’re fresh vacancies every month.</p>
          <p>Make sure you've read Writing a comprehensive résumé article.</p>
          <p><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Follow us on Facebook</a></p>
          <h1>Fresh updates are here!</h1>
          <p>We post the most recent vacancies in our Facebook group and in the Telegram channel.</p>
          <p><TelegramButton /></p>
        </aside>
        <div className="right-panel col col-8-of-12 col-4-of-8">
          <h1>Vacancies {data.allMarkdownRemark.totalCount}</h1>
          <div className="row row-nested">
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className={`col col-4-of-12 col-4-of-8 ${styles.vacancie}`} key={node.id}>
                  <h3 className={styles.vacancie_header}>{node.frontmatter.title}</h3>
                  <div className={styles.tags}>
                    {node.frontmatter.tags.split(", ").map(tag => <div className={styles.tag} key={tag}>{tag}</div>)}
                  </div>
                  <div>{getExcerpt(node.html)}</div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
)}

export default IndexPage;

export const query = graphql`
  query IndexQuery {
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