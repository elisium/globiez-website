import React from 'react';
import Layout from '../components/layout';
import TelegramButton from '../components/shared/telegramButton';
import QAItem from '../components/qa-item/qa-item';

import styles from './styles/qa.module.css';

const QAPage = ({ data, location }) => {

    return (
        <Layout>
            <div className="row">
                <aside className="left-panel col col-4-of-12 col-4-of-8">
                    <h1>Community</h1>
                    <p>We are those who already been through the process of finding a job in the Netherlands and who is seeking some advice.
                         Feel free to reach us out!</p>
                    <p className={styles.facebook}><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Follow us on Facebook</a></p>
                    <p>Our group on Telegram keeps growing.</p>
                    <p><TelegramButton /></p>
                </aside>
                <div className="right-panel col col-8-of-12 col-4-of-8">
                    <h1>Q&A</h1>
                    <div className="row row-nested">
                      <div className="col col-4-of-12 col-4-of-8">
                        <h2>Hiring process</h2>
                        <QAItem
                          q="What should someone expect interviewing for a Java-developer?
                            Any assessments given during the hiring process?"
                          a="What should someone expect interviewing for a Java-developer?
                            Any assessments given during the hiring process?"
                          open
                        />
                        <QAItem
                          q="What is the interview process like?"
                          a="What should someone expect interviewing for a Java-developer?
                            Any assessments given during the hiring process?"
                        />
                        <QAItem
                          q="What happens after second interview?"
                          a="What should someone expect interviewing for a Java-developer?
                            Any assessments given during the hiring process?"
                        />
                        <QAItem
                          q="Phone interview. What is that about?"
                          a="What should someone expect interviewing for a Java-developer?
                            Any assessments given during the hiring process?"
                        />
                      </div>
                      <div className="col col-4-of-12 col-4-of-8">
                        <h2>Relocation</h2>
                        <QAItem
                          q="Moving your belongings to the Netherlands."
                          a="The cost of moving to the Netherlands will depend on how you choose to move your belongings, 
                          which can be done via air freight or shipping. If you are travelling from mainland Europe, 
                          you could also use train or road freight. Another option is to use a professional relocation company. 
                          If you need help relocating, Expatica has a directory of relocation and moving companies in the Netherlands, 
                          including Holland Movers, specialized in carefree international moves."
                          open
                        />
                        <QAItem
                          q="Immigration and registration after you arrive."
                          a="What should someone expect interviewing for a Java-developer?
                            Any assessments given during the hiring process?"
                        />
                        <QAItem
                          q="Health insurance and social security benefits."
                          a="What should someone expect interviewing for a Java-developer?
                            Any assessments given during the hiring process?"
                        />
                        <QAItem
                          q="Opening a bank account in the Netherlands."
                          a="What should someone expect interviewing for a Java-developer?
                            Any assessments given during the hiring process?"
                        />
                        <QAItem
                          q="Paying tax in the Netherlands."
                          a="What should someone expect interviewing for a Java-developer?
                            Any assessments given during the hiring process?"
                        />
                      </div>
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