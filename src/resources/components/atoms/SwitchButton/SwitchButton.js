import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class SwitchButton extends React.PureComponent {
    static propTypes = {
        isActive: PropTypes.bool,
        onClick: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]).isRequired
    };

    static defaultProps = {
        isActive: true,
        onClick: () => {
        }
    };


    render() {
        const {isActive, onClick} = this.props;
        return (
            <button
                className={classNames('btn', {'btn-success': this.props.isActive})}
                onClick={onClick}
            >{this.props.children}
            </button>
        );
    }
}
