import React, {Component} from 'react';
import {i18nInstance} from '@i18next';
import Layout from '@layouts';
import {withI18next} from '@hoc/withI18next';


class I18Next extends Component {
    render() {
        const {t} = {...this.props};

        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>i18Next 多國語系</h2>
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

                            <br/>
                            <br/>
                            <div>{t('welcome', '預設文字')}</div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default withI18next(['common'])(I18Next);
