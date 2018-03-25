import React from 'react'
import {connect} from 'react-redux'
import {addLife, subLife} from '@stores/actions/game'

class AddLife extends React.PureComponent {
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



const mapStateToProps = (state) => ({
    gameLife: state.game.life,
});


//原本應該傳入 props 為 count 參數, 與 addCount 方法
//現在改為從 stores 從中間接入把 redux的state放到 該元件的props, 也就是新增新的方法為 stores, 取代原本的作法(外部傳入 props)
export default connect(mapStateToProps, {addLife, subLife})(AddLife)