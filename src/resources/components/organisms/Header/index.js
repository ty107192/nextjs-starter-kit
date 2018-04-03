import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import NavLang from '@components/organisms/NavLang';
import NavMenu from '@components/organisms/NavMenu';

export default class Header extends React.PureComponent {
    render() {
        return (
            <HeaderCustom className="container">
                <div className="row">
                    <div className="col col-sm-auto">
                        <span className="icon icon-logo-ipay"/>
                    </div>
                    <div className="col text-right">
                        <span className="icon icon-bell"/>
                    </div>
                </div>
            </HeaderCustom>
        );
    }
}

const HeaderCustom = styled.header`
    padding-top: 25px;
    padding-bottom: 25px;
    border-bottom: 2px #28a8df solid;
`;
