/* eslint-disable react/forbid-prop-types */

import React, {Children} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'next/router';
import {Link} from '@routes';
import rules from '@routes/config';
import {find, words} from 'lodash';

const ActiveLink = ({router, children, ...props}) => {
    const child = Children.only(children);

    const basePath = words(router.asPath, /[^? ]+/g);
    const sameRoutePath = find(rules, {pattern: basePath[0]}); // get base path, not query string

    let className = child.props.className || null;
    if (sameRoutePath && sameRoutePath.name === props.route) {
        className = `${className !== null ? className : ''} ${props.activeClassName}`.trim();
    }


    delete props.activeClassName;

    return <Link {...props}>{React.cloneElement(child, {className})}</Link>;
};

ActiveLink.defaultProps = {
    activeClassName: 'active'
};

ActiveLink.propTypes = {
    activeClassName: PropTypes.string,
    route: PropTypes.string.isRequired,
    router: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default withRouter(ActiveLink);
