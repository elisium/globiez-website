import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from "gatsby"

import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';
import Cookies from '../cookies/cookies';
import './index.css';
import './grid.css';

const Layout = ({ children, currentPath }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Noto+Sans:400,400i,700" rel="stylesheet"></link>
        </Helmet>
        <Header currentPath={currentPath} />
        <Body>
          {children}
        </Body>
        <Footer />
        <Cookies />
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout
