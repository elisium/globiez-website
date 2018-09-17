import React, { Fragment } from 'react';
import styles from './styles/index.module.css';
import { Parser } from 'htmlparser2';
import Link from 'gatsby-link'

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
  <div className="row">
    <div className="col col-4-of-12">
      <h1>About us</h1>
      <p>There’re fresh vacancies every month.</p>
      <p>Make sure you've read Writing a comprehensive résumé article.</p>
      <p><a href="https://facebook.com/">Follow us on Facebook</a></p>
      <h1>Fresh updates are here!</h1>
      <p>We post the most recent vacancies in our Facebook group and in the Telegram channel.</p>
      <p><a href="https://t.me/">Join Telegram channel</a></p>
    </div>
    <div className={`${styles.right} col col-8-of-12`}>
      <h1>Vacancies {data.allMarkdownRemark.totalCount}</h1>
      <div className="row row-nested">
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="col col-4-of-12" key={node.id}>
              <h3>{node.frontmatter.title}</h3>
              <div>
                {node.frontmatter.tags.split(", ").map(tag => <div key={tag}>{tag}</div>)}
              </div>
              <div>{getExcerpt(node.html)}</div>
            </div>
        ))}
      </div>
    </div>
  </div>
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