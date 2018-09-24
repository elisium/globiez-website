import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import TelegramButton from '../components/shared/telegramButton';

const QAPage = ({ data, location }) => {

    return (
        <Layout>
            <div className="row">
                <aside className="left-panel col col-4-of-12 col-4-of-8">
                    <h1>Community</h1>
                    <p>We are those who already been through the process of finding a job in the Netherlands and who is seeking some advice.
                         Feel free to reach us out!</p>
                    <p><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Follow us on Facebook</a></p>
                    <p>Our group on Telegram keeps growing.</p>
                    <p><TelegramButton /></p>
                </aside>
                <div className="right-panel col col-8-of-12 col-4-of-8">
                    <h1>Q&A</h1>
                    <div className="row row-nested">
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default QAPage;

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