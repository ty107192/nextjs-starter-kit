import React from 'react'
import {connect} from 'react-redux'
import {addLife, subLife} from '@stores/actions/game'



const mapStateToProps = (state) => ({
    gameLife: state.game.life,
});

@connect(mapStateToProps, {addLife, subLife})


export default class extends React.PureComponent {
    add = () => {
        this.props.addLife()
    }
    sub = () => {
        this.props.subLife()
    }

    render() {
        const {gameLife} = this.props
        return (
            <div className="row" style={{'marginTop': '20px'}}>
                <div className="col-auto" style={{'fontSize': '20px'}}>
                    💖 x<span>{gameLife}</span>
                </div>
                <div className="col">
                    <button className="btn btn-success btn-xs" onClick={this.add}>投幣</button>
                    <span> </span>
                    <button className="btn btn-danger btn-xs" onClick={this.sub}>退幣</button>
                </div>
            </div>
        )
    }
}
