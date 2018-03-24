import React from 'react'
import {bindActionCreators} from 'redux'
import {initStore, startClock, addCount, serverRenderClock} from '../../store'
import withRedux from 'next-redux-wrapper';
import Clock from '@components/atoms/Clock';
import AddCount from '@components/atoms/AddCount';
import Layout from "@components/layouts/master";
import {withI18next} from '@hoc/withI18next';
import {asset} from "@utils/uri/index";


class Counter extends React.PureComponent {
    static getInitialProps({store, isServer}) {
        store.dispatch(serverRenderClock(isServer))
        store.dispatch(addCount())

        return {isServer}
    }

    componentDidMount() {
        this.timer = this.props.startClock()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const {t} = {...this.props};

        return (
            <Layout title={t('menu.counter')}>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>吞食天地 Redux 呂布版</h1>
                                <div style={{paddingTop: '20px'}}>
                                    <h2>
                                        <img className="img-fluid" src={asset('img/game.png')}/>
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
        startClock: bindActionCreators(startClock, dispatch)
    }
}

export default withI18next()(withRedux(initStore, null, mapDispatchToProps)(Counter))
