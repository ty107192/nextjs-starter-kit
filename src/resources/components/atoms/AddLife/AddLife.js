import React from 'react';
import PropTypes from 'prop-types';
import withI18Next from '@modules/i18next/with-i18next';

@withI18Next

export default class AddLife extends React.PureComponent {
    static propTypes = {
        addLife: PropTypes.func.isRequired,
        subLife: PropTypes.func.isRequired,
        gameLife: PropTypes.number,
        t: PropTypes.func.isRequired
    };

    static defaultProps = {
        gameLife: 0
    };

    add = () => {
        this.props.addLife();
    };
    sub = () => {
        this.props.subLife();
    };

    render() {
        const {gameLife, t} = this.props;
        return (
            <div className="row" style={{marginTop: '20px'}}>
                <div className="col-auto" style={{fontSize: '20px'}}>
                    <span role="img" aria-label="life">💖 x{gameLife}</span>
                </div>
                <div className="col">
                    <button className="btn btn-success btn-xs" onClick={this.add}>
                        {t('game.coin')}
                    </button>
                    <span/>
                    <button className="btn btn-danger btn-xs" onClick={this.sub}>
                        {t('game.refund')}
                    </button>
                </div>
            </div>
        );
    }
}

