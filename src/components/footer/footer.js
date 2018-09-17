import React from 'react';
import styles from './footer.module.css';

const Footer = ({ children }) => (
    <div className={styles.main}>
        <div className="container">
            <div className="row">
                <div className="col col-4-of-12">
                    <p>Social media: Facebook, LinkedIn</p>
                </div>
                <div className="col col-8-of-12">
                    <p>Email: <a href="mailto:hello@globiez.com">hello@globiez.com</a></p>
                </div>
            </div>
        </div>
    </div>
)

export default Footer
