import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Router from 'next/router';
import NProgress from 'nprogress';
import '@styles/app.scss';


Router.onRouteChangeStart = (url) => {
    NProgress.start();
};
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
                        <title>{this.props.title}</title>
                    </Head>
                )}

                {this.props.children}
            </div>
        );
    }
}

