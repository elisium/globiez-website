import React from 'react';
import Layout from '../components/layout';
import SocialIcons from '../components/shared/socialIcons';
import styles from './styles/contact.module.css';
import identifying_icon from './icons/identifying.svg';
import defining_icon from './icons/defining.svg';
import candidate_selection_icon from './icons/candidate-selection.svg';
import interview_icon from './icons/interview.svg';
import final_icon from './icons/final.svg';
import hired_icon from './icons/hired.svg';
import piggy_bank_icon from './icons/piggy-bank-mini.svg';
import monthly_icon from './icons/monthly-mini.svg';

const Contact = ({ data, location }) => {

    return (
        <Layout>
            <div className="row">
                <aside className="left-panel col col-4-of-12 col-4-of-8">
                    <h1>Contact us</h1>
                    <p>
                        Dennis van der Veen<br />
                        Managing Consultant
                    </p><p>
                        Nijlstraat 63<br />
                        1448 NW Purmerend
                    </p><p>
                        Tel: +31 (0) 20 2617395<br />
                        Tel: +31 (0) 6 13387979
                    </p>
                    <p>
                        Please contact us at <a href="mailto:hello@globiez.com">hello@globiez.com</a> or on social media.
                    </p>
                    <SocialIcons
                        fb="https://www.facebook.com/Globiez/"
                        ln="https://www.linkedin.com/company/globiez-work-the-world/"
                        tg="https://t.me/DennisV"
                        tw="https://twitter.com/Globiez_IT"
                    />
                </aside>
                <div className="right-panel col col-8-of-12 col-4-of-8">
                    <div className="row row-nested">
                        <div className="col col-4-of-12 col-4-of-8">
                            <h1>Who we are</h1>
                            <p>
                                Globiez is a highly-energized IT recruitment agency based in Amsterdam.
                                The company was founded early 2016 with the goal to provide smart & affordable
                                recruitment and contracting services to start-ups (ICO’s and STO’s) and scale ups.<br /> 
                                In this tense IT job market, we like to do things a little bit differently.<br />
                                Our focus is on international professionals instead of the small pool of candidates
                                in this crowded Western European IT job market. We have a huge network of IT
                                professionals not only in Europe (EU/ non-EU) but on a global scale.<br />
                                We truly know the IT industry: the challenges, the chances, the threats and the
                                latest developments. And, because we strongly believe in technical developments
                                like iOT, AI and Blockchain, our business model allows us to accept crypto currencies.
                            </p>
                            <h3>Globiez in short:</h3>
                            <ul>
                                <li>We do your IT recruitment;</li>
                                <li>We help with IT contracting;</li>
                                <li>We accompany you with outsourcing your development;</li>
                                <li>We help with the hiring road map;</li>
                                <li>We are experienced in writing vacancies;</li>
                                <li>We assist in relocating new hires.</li>
                            </ul>
                            <h3>The advantages of recruiting European IT professionals:</h3>
                            <ul>
                                <li>Huge talent pool;</li>
                                <li>Highly motivated professionals with high work ethics;</li>
                                <li>A get it done and savvy attitude;</li>
                                <li>Salary levels are favourable;</li>
                                <li>Highly educated, Bachelor and Master degrees.</li>
                            </ul>
                            <h2>Section process</h2>
                            <p>
                                We aim to bring you only the best talents and our selection process includes the following steps.
                            </p>
                            <h3 className={styles.sectionProcessItem}>
                                <img src={identifying_icon} alt="Steaming cup icon" />
                                <span>Identifying the company and the team</span>
                            </h3>
                            <h3 className={styles.sectionProcessItem}>
                                <img src={defining_icon} alt="Pen and paper icon" />
                                <span>Defining role</span>
                            </h3>
                            <h3 className={styles.sectionProcessItem}>
                                <img src={candidate_selection_icon} alt="Opened envelope with letter icon" />
                                <span>Candidate selection</span>
                            </h3>
                            <h3 className={styles.sectionProcessItem}>
                                <img src={interview_icon} alt="Microphone icon" />
                                <span>Interview</span>
                            </h3>
                            <h3 className={styles.sectionProcessItem}>
                                <img src={final_icon} alt="Conversation bubbles icon" />
                                <span>Final selection and job offer</span>
                            </h3>
                            <h3 className={styles.sectionProcessItem}>
                                <img src={hired_icon} alt="Thumbs up icon" />
                                <span>Candidate is hired</span>
                            </h3>
                        </div>
                        <div className="col col-4-of-12 col-4-of-8">
                            <h2>What we do</h2>
                            <p>
                                Globiez offers recruitment and contracting services. We are experienced in recruiting
                                IT Architects, Developers, Testers, UX Designers, and roles alike. Besides the
                                “traditional” programming language roles, we also have a great network of Solidity, AI
                                and iOT experts.<br />
                                If you are looking to outsource your development solutions, look no further!<br />
                                Globiez offers not only seasoned development teams in Europe, we also have a pool of
                                independent remote professionals.<br />
                                We are experienced in assisting IT start-ups and scale-ups. So, if your business needs
                                help with drafting a hiring road map or hiring plan, Globiez is your partner!<br />
                                We are skilled in building teams from the ground up. If you are an existing company,
                                we are your partner in recruiting IT professionals to strengthen and upscale your team.<br />
                                Moreover, Globiez can assist you with drafting challenging vacancies and relocating new hires.
                            </p>
                            <h3>Why Globiez</h3>
                            <ul>
                                <li>We know IT! </li>
                                <li>We “hand pick” our candidates. No standards here!</li>
                                <li>We focus on International talent. We like to think outside the comfort area.</li>
                                <li>Our “fees” and conditions are unmatched in the market.</li>
                                <li>We are pros when it comes to start-ups (ICO-, STO projects) and scale-ups.</li>
                            </ul>
                            <h3>Your investment</h3>
                            <p>
                                In the following table you see types of investment which differ by a percentage of the annual
                                gross salary and a number of payments.
                            </p>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <td />
                                        <td>
                                            <img src={piggy_bank_icon} alt="Piggy bank icon" />
                                        </td>
                                        <td>
                                            <img src={monthly_icon} alt="Calendar icon" />
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Crypto investment (ETH/BTC)</td>
                                        <td>18%</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Standart investment</td>
                                        <td>20%</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Split investment 1</td>
                                        <td>22%</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>Split investment 2</td>
                                        <td>24%</td>
                                        <td>12</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                Download <a href="http://globiez.com/">White paper Globiez</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;