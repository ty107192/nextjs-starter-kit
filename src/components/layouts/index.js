import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '@styles/bootstrap.scss';
import '@styles/app.scss';

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
