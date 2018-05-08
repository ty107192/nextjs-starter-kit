import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, {css} from 'styled-components';

const Icon = ({
    code, status, size, color, top, bottom, left, right, className, style, onClick
}) => (
    <IconGroup className={classnames(`iconfont icon-${code}`, className)} size={size} top={top} bottom={bottom} left={left} right={right} color={color} status={status} onClick={onClick} style={style}/>
);

Icon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    code: PropTypes.string.isRequired,
    status: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    onClick: PropTypes.func
};

Icon.defaultProps = {
    className: '',
    style: {},
    status: '',
    color: '',
    size: 1,
    top: null,
    bottom: null,
    left: null,
    right: null,
    onClick: () => {}
};

export default Icon;

const IconGroup = styled.i`
    display: inline-block;
    color: #bdbdbd;
    font-size: ${props => 2.2 * props.size}rem;
    height: auto;
    vertical-align: middle;
    line-height: normal;
    
    margin-bottom: ${props => (props.bottom ? `${props.bottom}px` : 'unset')};
    margin-top: ${props => (props.top ? `${props.top}px` : 'unset')};
    margin-right: ${props => (props.right ? `${props.right}px` : 'unset')};
    margin-left: ${props => (props.left ? `${props.left}px` : 'unset')};

    
    ${props => props.color && css`
       color: ${props.color};
    `}
    
    ${props => props.status === 'success' && css`
       color: #8bc34c;
    `}
    
    ${props => props.status === 'info' && css`
       color: #28a9e0;
    `}
    
    ${props => props.status === 'error' && css`
       color: #e75937;
    `}
 
`;
