import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Router from 'next/router';
import NProgress from 'nprogress';
import Header from '@organisms/header';
import '@assets/sass/dist/app.scss';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


export default class Layout extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

    static defaultProps = {
        title: '',
        children: ''
    };

    render() {
        return (
            <div>
                {this.props.title && (
                    <Head>
                        <title>Next | {this.props.title}</title>
                    </Head>
                )}

                <Header/>
                <Main>
                    {this.props.children}
                </Main>
                <footer/>
            </div>
        );
    }
}

const Main = styled.main`
  padding-top: 10px;
  font-size: 1.4rem;
`;

