import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import NavLang from '@components/organisms/NavLang';
import NavMenu from '@components/organisms/NavMenu';

export default class Header extends React.PureComponent {
    render() {
        return (
            <HeaderCustom>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-auto">
                            <Title>
                                <a href="javascript:;" onClick={() => Router.pushRoute('home')}>
                                    Nextjs Starter Kit
                                </a>
                            </Title>
                        </div>
                        <div className="col-5">
                            <NavMenu/>
                        </div>
                        <div className="col text-right">
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
    
   a{
     color:#fff;
     
     &:hover{
      color:#2be0a8;
     }
   }
`;
