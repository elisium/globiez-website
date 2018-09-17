import React from 'react';
import PropTypes from 'prop-types';
import styles from './body.module.css';

const Body = ({ children }) => (
    <div className={styles.main}>
        <div className='container'>
            {children}
        </div>
    </div>
)

Body.propTypes = {
    children: PropTypes.element
}

export default Body
