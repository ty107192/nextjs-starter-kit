import React from 'react';
import Layout from '@components/layouts/Master';
import Link from '@components/atoms/Link';
import withI18Next from '@modules/i18next/withI18Next';


@withI18Next

export default class extends React.PureComponent {
    render() {
        const {t} = {...this.props};

        return (
            <Layout title={t('menu.comics')}>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>{t('menu.comics')}</h1>
                                <div style={{paddingTop: '20px'}}>
                                    <ol>
                                        <li>
                                            <Link route="comics-detail" params={{id: 1}}>
                                                <a>{t('comics.firstInfo')}</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link route="comics-detail" params={{id: 2}}>
                                                <a>{t('comics.secondInfo')}</a>
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
