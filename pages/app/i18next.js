import React, {Component} from 'react';
import {translate} from 'react-i18next';
import i18n from '@i18next';
import Layout from '@layouts';

class I18Next extends Component {
    static async getInitialProps({req}) {
        if (req && !process.browser) return i18n.getInitialProps(req, ['common']);
        return {};
    }


    render() {
        const {t} = {...this.props};

        return (
            <Layout>
                <div>
                    <h2>i18Next 多國語系</h2>

                    <button
                        onClick={() => {
                            i18n.changeLanguage('zh-TW');
                        }}
                    >繁體中文
                    </button>
                    <button
                        onClick={() => {
                            i18n.changeLanguage('zh-CN');
                        }}
                    >简体中文
                    </button>
                    <button
                        onClick={() => {
                            i18n.changeLanguage('en-US');
                        }}
                    >ENGLISH
                    </button>

                    <br/>
                    <br/>
                    <div>{t('welcome')}</div>

                </div>
            </Layout>
        );
    }
}

export default translate(['common'], {i18n, wait: process.browser})(I18Next);
