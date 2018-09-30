import React from 'react';
import Layout from '../components/layout';
import styles from './styles/services.module.css';

const Services = ({ data, location }) => {

    return (
        <Layout>
            <div className="row">
                <aside className="left-panel col col-4-of-12 col-4-of-8">
                    <h1>Query</h1>
                    <form name="services" action="/services/#success" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="services" />
                        <div className={styles.form_entry}>
                            <label htmlFor="query">I would like to know more</label>
                            <textarea id="query" name="query"></textarea>
                        </div>
                        <div className={styles.form_entry}>
                            <label htmlFor="name">Full name</label>
                            <input id="name" name="name" type="text" defaultValue="My name is " />
                        </div>
                        <div className={styles.form_entry}>
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" />
                        </div>
                        <div className={styles.form_entry}>
                            <label htmlFor="phoneSkype">Phone number or Skype ID (optional)</label>
                            <input id="phoneSkype" name="phoneSkype" type="text" />
                        </div>
                        <div className={styles.form_actions}>
                            <input className={`button ${styles.form_send}`} type="submit" value="Send Query" />
                        </div>
                    </form>
                    {location.hash === "#success" && <h4>Success</h4>}
                </aside>
                <div className="right-panel col col-8-of-12 col-4-of-8">
                    <h1>Services</h1>
                    <div className="row row-nested">
                        <div className="col col-4-of-12 col-4-of-8">
                            <h2>ICO</h2>
                            <p>Globiez assists your company with setting up and executing your ICO.
                                We can lead your ICO project or act as an advisor on the side line.<br />
                                We are experienced entrepreneurs, agile, direct and adaptable.
                                Because, an ICO comes with surprises and we are ready to face them!<br />
                                Although we think the entrepreneur should write the white paper him/ her self,
                                our consultants can support you with writing a focussed and professional white paper.</p>
                            <h2>ICO Advisors</h2>
                            <p>ICO Advisors are key for a trustable  and successful ICO. <br/>
                                We can assist you finding the right Advisors for your branch and ICO in our extensive network. 
                                And we can help you to find them in your own network. You know more people than you think!</p>
                            <h2>Training & Speaking</h2>
                            <p>We are all ICO and crypto fanatics. We love the topics and know a lot about it. 
                                We are eager to share our knowledge with you and your team.</p>
                            <h3>Topics:</h3>
                            <ul>
                                <li>Introduction to ICO and crypto</li>
                                <li>How to evaluate an ICO?</li>
                                <li>Blockchain training for Developers</li>
                                <li>How to set up an ICO</li>
                            </ul>
                        </div>
                        <div className="col col-4-of-12 col-4-of-8">
                            <h2>ICO Fund raising</h2>
                            <p>Although the crypto market is growing rapidly it’s hard to find token buyers/ investors. 
                                Globiez can assist you with raising funds in the ICO funding jungle. 
                                We have access to more than 500 crypto funds, VC’s, family offices and HNWI’s across the world.</p>
                            <h2>Building Tech Teams</h2>
                            <h3>Recruitment</h3>
                            <p>We can recruit your experienced and start-up minded techies for you.
                                From Front-end to solidity Developers and Blockchain Architects. Both contractors as well as regular employees.</p>
                            <h3>Remote Team</h3>
                            <p>
                                Globiez has access to highly experienced and professional remote IT development teams to build your platform. 
                                From Front-end developers to solidity developers and Blockchain Architects.</p>                            
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Services;