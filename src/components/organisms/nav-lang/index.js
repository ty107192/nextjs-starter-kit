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
                <LangLink
                    href="javascript:;"
                    onClick={() => {
                        i18nInstance.changeLanguage('zh-TW');
                    }}
                >繁體中文
                </LangLink>
                <span> | </span>
                <LangLink
                    href="javascript:;"
                    onClick={() => {
                        i18nInstance.changeLanguage('zh-CN');
                    }}
                >简体中文
                </LangLink>
                <span> | </span>
                <LangLink
                    href="javascript:;"
                    onClick={() => {
                        i18nInstance.changeLanguage('en-US');
                    }}
                >ENGLISH
                </LangLink>
            </nav>
        );
    }
}

const LangLink = styled.a`
  color: #fff;
`
    