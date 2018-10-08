import React, { Component } from 'react';
import styles from './cookies.module.css';

class Cookies extends Component {
    state = {
        open: false
    }

    componentDidMount() {
        let hasConsent = false;
        try {
            hasConsent = localStorage.getItem("cookies-consent");
        } catch (err) {}
        if (!hasConsent) {
            setTimeout(() =>
                this.setState({ open: true })
            , 2000);
        }
    }

    handleConsent = () => {
        try {
            localStorage.setItem("cookies-consent", "true");
        } catch (err) { }
        this.setState({ open: false });
    }

    render() {
        return <div className={`${styles.backdrop} ${!this.state.open ? styles.hidden : ''}`}>
            <div className={styles.modal}>
                <h2>Welcome to Globiez.com!</h2>
                <p>
                    Cookies are text files which are downloaded to your device
                    when you visit a website. They are useful because they
                    allow a website to recognise a user’s device. You can find
                    more information about cookies at www.privacypolicy/globiez.com.
                </p>
                <h4>Performance Cookies</h4>
                <p className={styles.descr}>
                    These cookies collect information about how visitors use our
                    services, for instance which pages visitors go to most often,
                    and if they get error messages from web pages. These cookies
                    collect anonymous information on the pages visited. All information 
                    these cookies collect is aggregated and therefore anonymous. It is 
                    only used to improve how our services perform. 
                </p><p className={styles.descr}>
                    Web analytics that use cookies to gather data to enhance the 
                    performance of a website fall into this category. For example, 
                    they may be used for testing designs and ensuring a consistent look 
                    and feel is maintained for the user. This category does not include 
                    cookies used for behavioural/targeted advertising networks.
                </p>
                <div className={styles.actions}>
                    <button onClick={this.handleConsent} className="button">
                        I agree
                    </button>
                </div>
            </div>
        </div>;
    }
}

export default Cookies;