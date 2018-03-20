import React, {Component} from 'react';
import {i18nInstance} from '@i18next';
import Layout from '@layouts';
import {withI18next} from '@hoc/withI18next';


class I18Next extends Component {
    render() {
        const {t} = {...this.props};

        return (
            <Layout title="i18Next 在地化">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h2>i18Next 在地化</h2>
                        </div>
                        <div className="col-6 text-right">
                            <button
                                onClick={() => {
                                    i18nInstance.changeLanguage('zh-TW');
                                }}
                            >繁體中文
                            </button>
                            <button
                                onClick={() => {
                                    i18nInstance.changeLanguage('zh-CN');
                                }}
                            >简体中文
                            </button>
                            <button
                                onClick={() => {
                                    i18nInstance.changeLanguage('en-US');
                                }}
                            >ENGLISH
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div>{t('welcome', '預設文字')}</div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default withI18next(['common'])(I18Next);
