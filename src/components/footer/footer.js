import React from 'react';
import styles from './footer.module.css';

const Footer = ({ children }) => (
    <footer className={styles.main}>
        <div className="container">
            <div className="row">
                <div className={`col col-4-of-12 ${styles.left}`}>
                    <div><p>Social media:</p></div>
                    <div>
                        <p><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                        <p><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>
                </div>
                <div className={`col col-8-of-12 col-4-of-8 ${styles.right}`}>
                    <p>Email: <a className={styles.linkMail} href="mailto:hello@globiez.com">hello@globiez.com</a></p>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
