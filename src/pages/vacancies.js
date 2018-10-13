import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import SocialIcons from '../components/shared/socialIcons';
import classNames from 'classnames';

import styles from './styles/vacancies.module.css';
import confirmation_icon from '../pages/icons/icon-confirmation.svg';

const VacanciesPage = ({ data, location }) => {
  const { allMarkdownRemark, markdownRemark } = data;
  const currentVacancie = markdownRemark ? markdownRemark : allMarkdownRemark.edges[0].node;
  currentVacancie.html = currentVacancie.html.replace(/(<\/?h)[1-6](>)/g, "$13$2"); // make sure all headings inside a vacancie are h3
  const currentPath = currentVacancie.fields.fullpath;
  console.log(location);

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
              <h2 className={styles.vacancieTitle}>{currentVacancie.frontmatter.title}</h2>
            </div>
          </div>
          <div className={`row row-nested ${styles.vacancieContent}`}>
            <div className="col col-4-of-12 col-4-of-8">
              <div dangerouslySetInnerHTML={{ __html: currentVacancie.html }} />
            </div>
            <div className="col col-4-of-12 col-4-of-8">
              {location.hash !== "#success" && <Fragment>
              <h3>Apply</h3>
              <form
                name="application"
                method="POST"
                action={`${currentPath}#success`}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="application" />
                <div className={styles.form_entry}>
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" defaultValue="My name is " />
                </div>
                <div className={styles.form_entry}>
                  <label htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" />
                </div>
                <div className={styles.form_entry}>
                  <label htmlFor="phoneSkype">Phone number or Skype ID (optional)</label>
                  <input id="phoneSkype" name="phoneSkype" type="text" />
                </div>
                <div className={styles.form_actions}>
                  <label htmlFor="cv" className={styles.form_file_label}>
                    Attach a CV
                  </label>
                  <input
                    className={styles.form_file}
                    id="cv"
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx,.md,.html,.odf"
                  />
                  <input className={`button ${styles.form_send}`} type="submit" value="Send Application" />
                </div>
                <input name="vacancie" type="hidden" value={currentVacancie.frontmatter.title} />
              </form>
              </Fragment>}
              {location.hash === "#success" && <Fragment>
                <h3>Thank you for reaching out!</h3>
                <h3>We received your application.</h3>
                <p className={styles.successIcon}><img src={confirmation_icon} alt="Opened envelope with letter and a checkmark" /></p>
                <p>Someone of our colleagues is going to look into it.</p>
                <p>Feel free to ask any additional questions via <a href="mailto:hello@globiez.com">hello@globiez.com</a>.</p>
              </Fragment>}
              <h3 className={styles.shareTitle}>Share this vacancy on social media</h3>
              <div className={styles.social_links}>
                <SocialIcons
                  fb={`https://www.facebook.com/sharer/sharer.php?u=https://globiez.com${currentPath}`}
                  ln={`https://www.linkedin.com/shareArticle?mini=true&url=https://globiez.com${currentPath}&title=${currentVacancie.frontmatter.title}&summary=&source=`}
                  tw={`https://twitter.com/home?status=https://globiez.com${currentPath}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
)}

export default VacanciesPage;

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