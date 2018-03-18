import React from 'react';
import ErrorComponent from 'next/error';

export default class Error extends React.Component {
    static getInitialProps({res, err}) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return {statusCode};
    }

    render() {
        return (
            <ErrorComponent statusCode={this.props.statusCode} />
        );
    }
}
