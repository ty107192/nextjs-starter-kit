import React from 'react';
import styled from 'styled-components';
import {i18nInstance} from '@modules/i18next';
import classNames from "classnames";


export default class NavLang extends React.Component {

    static defaultProps ={
        activeLang: ''
    };

    render() {
        const {activeLang} = {...this.props};
        const checkLang = {
            zhtw : activeLang === 'zh-tw' ? 'btn-info' : 'btn-outline-info',
            zhcn : activeLang === 'zh-cn' ? 'btn-info' : 'btn-outline-info',
            enus : activeLang === 'en-us' ? 'btn-info' : 'btn-outline-info'
        };

        return (
            <nav className="text-middle">
                <ButtonMenu key={1} className={classNames('btn', checkLang.zhtw)}
                            onClick={() => i18nInstance.changeLanguage('zh-tw')}>
                    繁中
                </ButtonMenu>
                <ButtonMenu key={2} className={classNames('btn', checkLang.zhcn)}
                            onClick={() => i18nInstance.changeLanguage('zh-cn')}>
                    简中
                </ButtonMenu>
                <ButtonMenu key={3} className={classNames('btn', checkLang.enus)}
                            onClick={() => i18nInstance.changeLanguage('en-us')}>
                    EN
                </ButtonMenu>
            </nav>
        );
    }
}


const ButtonMenu = styled.button`
  margin-left: 5px;
`
