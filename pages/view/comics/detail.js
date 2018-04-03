import React from 'react';

import styled from 'styled-components';
import Layout from '@components/layouts';
import withI18Next from '@modules/i18next/with-i18next';
import {asset} from '@utils/uri';

@withI18Next

export default class Detail extends React.PureComponent {
    render() {
        const {url} = {...this.props};
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>props.url.query.id = {url.query.id}</p>
                            <p>Re:從零開始的異世界生活</p>
                            <img className="img-fluid" src={asset('img/sample.jpg')}/>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
