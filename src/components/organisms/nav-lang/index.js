import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';
import {asset} from '@utils/uri';
import {i18nInstance} from '@i18next';


export default class NavLang extends React.Component {
    render() {
        return (
            <nav className="text-middle">
                <ButtonMenu className="btn btn-outline-info" onClick={() => i18nInstance.changeLanguage('zh-TW')}>
                    繁中
                </ButtonMenu>
                <ButtonMenu className="btn btn-outline-info" onClick={() => i18nInstance.changeLanguage('zh-CN')}>
                    简中
                </ButtonMenu>
                <ButtonMenu className="btn btn-outline-info" onClick={() => i18nInstance.changeLanguage('us-EN')}>
                    EN
                </ButtonMenu>
            </nav>
        );
    }
}


const ButtonMenu = styled.button`
  margin-left: 5px;
`
