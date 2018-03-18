import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '@styles/app.scss';

export default class Layout extends React.PureComponent {
    static propTypes = {
        children: PropTypes.string.isRequired
    };
    render() {
        return (
            <div className="layout-base">
                {this.props.children}
            </div>
        );
    }
}
