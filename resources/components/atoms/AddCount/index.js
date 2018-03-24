import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addCount} from '../../../../store'

class AddCount extends Component {
    add = () => {
        this.props.addCount()
    }

    render() {
        const {count} = this.props
        return (
            <div className="row" style={{'marginTop':'20px'}}>
                <div className="col-auto" style={{'fontSize':'20px'}}>
                    💖 x<span>{count}</span>
                </div>
                <div className="col">
                    <button className="btn btn-danger btn-xs" onClick={this.add}>投幣增加生命</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({count}) => ({count})

const mapDispatchToProps = (dispatch) => {
    return {
        addCount: bindActionCreators(addCount, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCount)