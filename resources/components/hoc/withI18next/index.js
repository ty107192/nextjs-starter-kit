/* eslint import/prefer-default-export:off */

import {translate} from 'react-i18next';
import {getInitialProps, i18n} from '@modules/i18next';

export const withI18next = (namespaces = ['common']) => (ComposedComponent) => {
    const Extended = translate(namespaces, {i18n: i18n, wait: process.browser})(ComposedComponent);

    Extended.getInitialProps = async (ctx) => {
        const composedInitialProps = ComposedComponent.getInitialProps
            ? await ComposedComponent.getInitialProps(ctx)
            : {};

        const i18nInitialProps =
            ctx.req && !process.browser ? getInitialProps(ctx.req, namespaces) : {};

        return {
            ...composedInitialProps,
            ...i18nInitialProps
        };
    };

    return Extended;
};
