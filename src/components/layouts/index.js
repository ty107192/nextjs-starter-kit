import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '@styles/app.scss';

export default class Layout extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.string.isRequired
    };

    static defaultProps = {
        title: ''
    };

    render() {
        return (
            <div className="layout-base">
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
