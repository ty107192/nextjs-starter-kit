import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import NProgress from 'nprogress';
import {asset} from '@utils/uri';
import {Router, Link} from '@routes/web';
import {withI18next} from '@hoc/withI18next';


class NavMenu extends React.Component {
    render() {
        const {t} = {...this.props};

        return (
            <nav className="text-middle">
                <Link route="home">
                    <a>{t('menu.home')}</a>
                </Link>
                <span> | </span>
                <a href="javascript:;" onClick={() => Router.pushRoute('news')}>{t('menu.news')}</a>
                <span> | </span>
                <Link route="router-id" params={{id: 3}}>
                    <a>3號</a>
                </Link>
            </nav>
        );
    }
}

export default withI18next(['common'])(NavMenu);

