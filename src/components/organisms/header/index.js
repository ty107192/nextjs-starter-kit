import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Router from 'next/router';
import Link from 'next/link';
import {asset} from '@utils/uri';
import NavLang from '@organisms/nav-lang';
import NavMenu from '@organisms/nav-menu';

export default class Header extends React.Component {
    render() {
        return (
            <HeaderCustom>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-auto">
                                    <Title>Nextjs Starter Kit</Title>
                                </div>
                                <div className="col">
                                    <NavMenu/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 text-right">
                            <NavLang/>
                        </div>
                    </div>
                </div>
            </HeaderCustom>
        );
    }
}

const HeaderCustom = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #000;
`;

const Title = styled.span`
   color: #fff;
   font-size: 2.4rem;
`
