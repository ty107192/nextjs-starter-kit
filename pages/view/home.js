import React from 'react';
import styled from 'styled-components';
import Layout from '@components/layouts/Master';
import withI18Next from '@modules/i18next/with-i18next';
import withRedux from '@modules/redux/with-redux';
import SwitchButton from '@components/atoms/SwitchButton';


@withI18Next
@withRedux

export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: -1
        };
    }

    switchHandle = (index) => {
        this.setState({activeIndex: index});
    };

    render() {
        const {t} = {...this.props};
        const {activeIndex} = {...this.state};

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

                                    <SwitchButton
                                        isActive={activeIndex === 1}
                                        onClick={() => this.switchHandle(1)}
                                    >
                                        Props
                                    </SwitchButton>
                                    <span> / </span>
                                    <SwitchButton
                                        isActive={activeIndex === 2}
                                        onClick={() => this.switchHandle(2)}
                                    >
                                        State
                                    </SwitchButton>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        );
    }
}

