import React from 'react';
import styles from './socialIcons.module.css';
import iconFB from './icons/facebook-icon.svg';
import iconLN from './icons/linked-in-icon.svg';
import iconTG from './icons/telegram-icon.svg';
import iconTW from './icons/twitter-icon.svg';

const SocialIcons = ({ fb, ln, tg, tw}) => {
    return (<div className={styles.main}>
        {fb && <a className={styles.link} href={fb}>
            <img className={styles.icon} src={iconFB} alt="Facebook link" />
        </a>}
        {ln && <a className={styles.link} href={ln}>
            <img className={styles.icon} src={iconLN} alt="Linkedin link" />
        </a>}
        {tg && <a className={styles.link} href={tg}>
            <img className={styles.icon} src={iconTG} alt="Telegram link" />
        </a>}
        {tw && <a className={styles.link} href={tw}>
            <img className={styles.icon} src={iconTW} alt="Twitter link" />
        </a>}
    </div>);
}

export default SocialIcons;
