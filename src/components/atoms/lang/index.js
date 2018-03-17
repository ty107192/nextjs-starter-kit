import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Lang extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (<FormattedMessage {...this.props}/>);
    }
}
Lang.defaultProps = {
    tagName: 'span'
};