import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux';
import {initStore} from '@stores'
import {addLife} from '@stores/actions/game'
import withRedux from 'next-redux-wrapper';
import AddLife from '@components/atoms/AddLife';
import Layout from "@components/layouts/Master";
import {withI18next} from '@hoc/withI18next';
import {asset} from "@utils/uri/index";


class Game extends React.PureComponent {
    static getInitialProps({store, isServer}) {
        //剛進入就送一條名, 這裡可已改成 呼叫API給預設值
        store.dispatch(addLife())

        return {isServer}
    }



    render() {
        const {t,gameLife} = {...this.props};

        return (
            <Layout title={t('menu.game')}>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>吞食天地 Redux</h1>
                                <div style={{paddingTop: '20px'}}>
                                    <img className="img-fluid" src={asset('img/game.gif')}/>
                                </div>

                            </div>
                            <div className="col-12">
                                <AddLife/>
                                {
                                    gameLife <= 1 && (
                                        <div>(你必須要大於1條生命才可以遊玩)</div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    gameLife: state.game.life,
});

export default compose(
    withI18next(),
    withRedux(initStore, null, {addLife}),
    connect(mapStateToProps)
)(Game)
