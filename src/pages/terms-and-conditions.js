import React from 'react';
import Layout from '../components/layout';

const QAPage = ({ data, location }) => {

    return (
        <Layout>
            <div className="row">
                <aside className="left-panel col col-4-of-12 col-4-of-8">
                    <h1>Privacy Terms</h1>
                    <h3>1. Personal data that we process</h3>
                    <p>
                        GLOBIEZ.com processes personal data concerning you because you make use of our services and/or
                        because you have self-provided these to us. <br />
                        Below there is an Overview of the personal data that we process:
                    </p>
                    <ul>
                        <li>Family name and first name</li>
                        <li>Gender</li>
                        <li>Date of birth</li>
                        <li>Place of birth</li>
                        <li>Address data</li>
                        <li>Phone number</li>
                        <li>E-mail address</li>
                        <li>Other personal data that you provide actively, for instance by creating a profile on this website, in correspondence and by phone</li>
                        <li>Location data</li>
                        <li>Data about your activities on our website</li>
                        <li>Data about your surfing behaviour across various websites (for instance because this enterprise is part of an advertising network)</li>
                        <li>List with contact data of the customer via an app</li>
                        <li>IP address</li>
                        <li>Internet browser and equipment type</li>
                    </ul>
                    <h3>2. Special and/or sensitive personal data that we process</h3>
                </aside>
                <div className="right-panel col col-8-of-12 col-4-of-8">
                    <p>
                        GLOBIEZ.com processes the following special and/or sensitive personal data of you:
                        passport photo. You can decide whether you add a photo to your profile, it is not an obligation.
                    </p>
                    <h3>3. Why we need data</h3>
                    <p>
                        GLOBIEZ.com processes your personal data, for the following purposes:
                    </p>
                    <ul>
                        <li>Sending of our newsletter and/or advertising folder</li>
                        <li>To inform you about changes of our services and products</li>
                        <li>To offer the possibility to create an account</li>
                    </ul>
                    <h3>4. How long do we keep data</h3>
                    <p>
                        GLOBIEZ.com shall not keep your personal data any longer than is required to fulfil the purposes
                        for which your data is collected. Our storage terms are three years.
                    </p>
                    <h3>5. Sharing with others</h3>
                    <p>
                        GLOBIEZ.com does not sell your data to third parties and shall provide this data solely if this is
                        required for the execution of our agreement with you or to comply with a lawful obligation.
                        With enterprises that process your data in our commission, we conclude a treaters agreement to
                        ensure for an equal level of security and confidentiality of your data. GLOBIEZ.com remains
                        responsible for this processing.
                    </p>
                    <h3>6. Mapping website visits</h3>
                    <p>
                        GLOBIEZ.com uses only technical and functional cookies. And analytic cookies, that cause no
                        infringement on your privacy. A cookie is a small text file that is stored upon the first visit
                        to this website, on your computer, tablet or smartphone. The cookies that we use, are necessary
                        for the technical working of the website and your user ease. They ensure that the website works
                        properly and remember for instance your preferential settings. Also, herewith we can optimise our
                        website. You can deregister for cookies by setting your internet browser so that this no longer
                        stores cookies. In addition, you can also remove all information that was stored earlier, via
                        the settings of your browser.
                    </p>
                    <h3>7. Viewing, modifying or removing data</h3>
                    <p>
                        You have the right to view, modify or remove your personal data. This you can do yourself
                        via the personal settings of your account. If it is not successful via these settings or you
                        have other questions/remarks about the data processing, then send a specified request to hello@globiez.com.
                        To be able to verify your identity, we ask you to send along a copy of your ID document. Please
                        black-out the so-called burgerservicenummer (BSN), MRZ (machine readable zone, the strip with
                        numbers at the bottom of the passport), passport number and your passport photo. This for the
                        protection of your privacy. GLOBIEZ.com shall respond to your request as soon as possible, but
                        in each case within four weeks.
                    </p>
                    <h3>8. You can also reach us via:</h3>
                    <p>
                        Website: www.globiez.com<br />
                        Phone number: 020 2617395<br />
                        Company address: Nijlstraat 63, 1448 NW Purmerend, the Netherlands
                    </p>
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