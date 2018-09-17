import React, { Fragment } from 'react';
import styles from './styles/index.module.css';
import Link from 'gatsby-link'

const IndexPage = () => (
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
      <h1>Vacancies</h1>
    </div>
  </div>
)

export default IndexPage
