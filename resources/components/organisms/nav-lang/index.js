import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';
import {asset} from '@utils/uri';
import {i18nInstance} from '@modules/i18next';


export default class NavLang extends React.Component {
    render() {
        return (
            <nav className="text-middle">
                <ButtonMenu className="btn btn-outline-info" onClick={() => i18nInstance.changeLanguage('zh-tw')}>
                    繁中
                </ButtonMenu>
                <ButtonMenu className="btn btn-outline-info" onClick={() => i18nInstance.changeLanguage('zh-cn')}>
                    简中
                </ButtonMenu>
                <ButtonMenu className="btn btn-outline-info" onClick={() => i18nInstance.changeLanguage('en-us')}>
                    EN
                </ButtonMenu>
            </nav>
        );
    }
}


const ButtonMenu = styled.button`
  margin-left: 5px;
`
