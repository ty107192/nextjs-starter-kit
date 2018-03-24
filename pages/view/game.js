import React from 'react'
import {bindActionCreators} from 'redux'
import {initStore, addCount} from '@store'
import withRedux from 'next-redux-wrapper';
import AddCount from '@components/atoms/AddCount';
import Layout from "@components/layouts/Master";
import {withI18next} from '@hoc/withI18next';
import {asset} from "@utils/uri/index";


class Counter extends React.PureComponent {
    static getInitialProps({store, isServer}) {
        // store.dispatch(serverRenderClock(isServer))
        // store.dispatch(addCount())

        return {isServer}
    }



    render() {
        const {t} = {...this.props};

        return (
            <Layout title={t('menu.counter')}>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>吞食天地 Redux</h1>
                                <div style={{paddingTop: '20px'}}>
                                    <h2>
                                        <img className="img-fluid" src={asset('img/game.gif')}/>
                                    </h2>
                                </div>

                            </div>
                            <div className="col-12">
                                <AddCount/>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCount: bindActionCreators(addCount, dispatch),
    }
}

export default withI18next()(withRedux(initStore, null, mapDispatchToProps)(Counter))
