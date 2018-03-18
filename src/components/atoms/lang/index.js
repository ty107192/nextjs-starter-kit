import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class Lang extends React.PureComponent {
    render() {
        return (<FormattedMessage {...this.props}/>);
    }
}
Lang.defaultProps = {
    tagName: 'span'
};
