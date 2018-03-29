import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addLife, subLife} from '@stores/actions/game';
import AddLife from './AddLife';


const mapStateToProps = state => ({
    gameLife: state.game.life
});


export default connect(mapStateToProps, {addLife, subLife})(AddLife);
