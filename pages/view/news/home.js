import React, {Component} from 'react';
import styled from 'styled-components';
import Layout from '@layouts/base';
import {Link} from 'routes';
import {withI18next} from '@hoc/withI18next';


class Home extends Component {
    render() {
        const {t} = {...this.props};

        return (
            <Layout title={t('menu.news')}>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>{t('menu.news')}</h1>
                                <div style={{paddingTop: '20px'}}>
                                    <ol>
                                        <li>
                                            <Link route="news-detail" params={{id: 1}}>
                                                <a>{t('news.firstInfo')}</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link route="news-detail" params={{id: 2}}>
                                                <a>{t('news.secondInfo')}</a>
                                            </Link>
                                        </li>
                                    </ol>
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

