import React, {Component} from 'react';

import styled from 'styled-components';
import {Router, Link} from '@routes/web';
import Layout from '@layouts/base/index';


class Home extends Component {
    static async getInitialProps({req}) {
        return {someDate: Date.now()};
    }

    render() {
        return (
            <Layout>
                <button onClick={() => Router.pushRoute('router-id', {id: 1})}>1號機</button>
                <button onClick={() => Router.pushRoute('router-id', {id: 2})}>2號機</button>
                <Link route="router-id" params={{id: 3}}>
                    <a>3號</a>
                </Link>
            </Layout>
        );
    }
}

export default Home;
