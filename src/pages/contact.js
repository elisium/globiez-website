import React from 'react';
import Layout from '../components/layout';

const Contact = ({ data, location }) => {

    return (
        <Layout>
            <div className="row">
                <aside className="left-panel col col-4-of-12 col-4-of-8">
                    <h1>Contact us</h1>
                </aside>
                <div className="right-panel col col-8-of-12 col-4-of-8">
                    <div className="row row-nested">
                        <div className="col col-4-of-12 col-4-of-8">
                            <h1>Who we are</h1>
                        </div>
                        <div className="col col-4-of-12 col-4-of-8">
                            <h2>What we do</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;