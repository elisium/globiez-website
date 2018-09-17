import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header/header';
import Body from '../components/body/body';
import Footer from '../components/footer/footer';
import './index.css';
import './grid.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Noto+Sans" rel="stylesheet"></link>
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <Body>
      {children()}
    </Body>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
