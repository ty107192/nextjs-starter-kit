import React from 'react';
import styled from 'styled-components';
import Layout from '@components/layouts/Master';
import {withI18next} from '@hoc/withI18next';
import withRedux from 'next-redux-wrapper';
import {initStore} from '@store'


class Home extends React.PureComponent {
    render() {
        const {t} = {...this.props};

        return (
            <Layout title={t('menu.home')}>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>{t('home.title')}</h1>
                                <div style={{paddingTop: '20px'}}>
                                    <h2>
                                        {t('home.sub-title')}
                                    </h2>
                                    <div>
                                        {t('home.sub-desc')}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        );
    }
}


export default withI18next()(withRedux(initStore, null, null)(Home))
