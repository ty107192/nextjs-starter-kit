import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import {i18nInstance} from '@modules/i18next';
import withI18Next from '@modules/i18next/with-i18next';

@withI18Next

export default class NavLang extends React.PureComponent {
    render() {
        const {i18n} = {...this.props};
        const checkLang = {
            zhtw: i18n.language === 'zh-tw' ? 'btn-info' : 'btn-outline-info',
            zhcn: i18n.language === 'zh-cn' ? 'btn-info' : 'btn-outline-info',
            enus: i18n.language === 'en-us' ? 'btn-info' : 'btn-outline-info'
        };

        return (
            <nav className="text-middle">
                <ButtonMenu
                    className={classNames('btn', checkLang.zhtw)}
                    onClick={() => i18nInstance.changeLanguage('zh-tw')}
                >
                    繁中
                </ButtonMenu>
                <ButtonMenu
                    className={classNames('btn', checkLang.zhcn)}
                    onClick={() => i18nInstance.changeLanguage('zh-cn')}
                >
                    简中
                </ButtonMenu>
                <ButtonMenu
                    className={classNames('btn', checkLang.enus)}
                    onClick={() => i18nInstance.changeLanguage('en-us')}
                >
                    EN
                </ButtonMenu>
            </nav>
        );
    }
}

const ButtonMenu = styled.button`
  margin-left: 5px;
`;
