import React, {Component} from 'react';
import styled from 'styled-components';
import Layout from '@layouts/base';
import {withI18next} from '@hoc/withI18next';


class About extends Component {
    render() {
        const {t} = {...this.props};

        return (
            <Layout title={t('about')}>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>{t('about:title')}</h1>
                                <div style={{paddingTop: '20px'}}>
                                    <Desc>
                                        {t('about:my-name')}
                                    </Desc>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        );
    }
}

export default withI18next(['common', 'about'])(About);


const Desc = styled.div`
  
`