import React from 'react';
import styled from 'styled-components';
import Layout from '@components/layouts/master';
import {withI18next} from '@components/hoc/withI18next';


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

export default withI18next()(Home);
