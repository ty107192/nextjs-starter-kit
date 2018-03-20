import React, {Component} from 'react';

import styled from 'styled-components';
import Lang from '@atoms/lang';
import {Router, Link} from '@routes/web';
import Layout from '@layouts/base';

class Home2 extends Component {
    static async getInitialProps({req}) {
        return {someDate: Date.now()};
    }

    render() {
        return (
            <Layout>
                <button onClick={() => Router.pushRoute('test-detail', {id: 1})}>1號機</button>
                <button onClick={() => Router.pushRoute('test-detail', {id: 2})}>2號機</button>
                {/* <Link route="testDetail" params={{id: 3}}> */}
                {/* <a>3號</a> */}
                {/* </Link> */}
                {/* <Lang id="description"/> */}
            </Layout>
        );
    }
}

export default Home2;
