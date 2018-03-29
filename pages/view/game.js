import React from 'react';
import {connect} from 'react-redux';
import {addLife} from '@stores/actions/game';
import AddLife from '@components/atoms/AddLife';
import Layout from '@components/layouts/Master';
import {asset} from '@utils/uri';
import withI18Next from '@modules/i18next/withI18Next';
import withRedux from '@modules/redux/withRedux';

const mapStateToProps = state => ({
    gameLife: state.game.life
});


@withI18Next
@withRedux
@connect(mapStateToProps, {addLife})

export default class extends React.PureComponent {
    static getInitialProps({store, isServer}) {
        // 剛進入就送一條命, 這裡可已改成 呼叫API給預設值
        store.dispatch(addLife());

        return {isServer};
    }


    render() {
        const {t, gameLife} = {...this.props};

        return (
            <Layout title={t('menu.game')}>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>{t('game.title')}</h1>
                                <div style={{paddingTop: '20px'}}>
                                    <img className="img-fluid" src={asset('img/game.gif')}/>
                                </div>

                            </div>
                            <div className="col-12">
                                <AddLife/>
                                {
                                    gameLife <= 1 && (
                                        <div>{t('game.desc')}</div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}
