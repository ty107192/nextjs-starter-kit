import React from 'react';
import styled from 'styled-components';
import Link from '@components/atoms/Link';
import withI18Next from '@modules/i18next/with-i18next';

@withI18Next
export default class extends React.PureComponent {
    render() {
        const {t} = {...this.props};

        return (
            <nav className="text-middle">
                <Link route="home">
                    <MenuLink href="javascript:;">{t('menu.home')}</MenuLink>
                </Link>
                <span> | </span>
                <Link activeClassName="active" route="comics">
                    <MenuLink href="javascript:;">{t('menu.comics')}</MenuLink>
                </Link>
                <span> | </span>
                <Link activeClassName="active" route="game">
                    <MenuLink href="javascript:;">{t('menu.game')}</MenuLink>
                </Link>
            </nav>
        );
    }
}

const MenuLink = styled.a`
  color: #fff;
  
  &.active{
    color: #e00025;
  }
`;

