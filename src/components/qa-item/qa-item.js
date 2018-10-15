import React, { Component } from 'react';
import styles from './qa-item.module.css';

class QAItem extends Component {
    state = {
        open: false
    }

    constructor(props) {
        super(props);
        if (props.open) {
            this.state.open = true;
        }
    }

    render(props) {
        const { q, a, height } = this.props;
        const { open } = this.state;
        return (<div
            className={`${styles.main} ${open ? styles.open : styles.closed}`}
        >
            <h3
                className={styles.title}
                onClick={() => this.setState({ open: !open })}
            >
                {q}
            </h3>
            <div className={styles.answer} style={{ maxHeight: height }}>{a}</div>
        </div>);
    }
}

export default QAItem
