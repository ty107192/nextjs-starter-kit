import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import pageWithIntl from '@hoc/pageWithIntl';
import styled from 'styled-components';
import Lang from '@atoms/lang';
import {Router, Link} from '@routes/web';
import Layout from '@layouts';

class Home extends Component {
    static async getInitialProps({req}) {
        return {someDate: Date.now()};
    }

    render() {
        return (
            <Layout>
                <Lang id="greeting" defaultMessage="AAA"/>
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

export default pageWithIntl(Home);
