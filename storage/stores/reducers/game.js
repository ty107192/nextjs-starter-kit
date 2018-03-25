import { ADD_LIFE, SUB_LIFE } from '../actions'


const initialState = {
    life: 0
}

export default function(state = initialState, action) {
    const { type } = action

    switch (type) {
        case ADD_LIFE:
            return Object.assign({}, state, {
                life: state.life + 1
            });
        case SUB_LIFE:
            return Object.assign({}, state, {
                life: state.life - 1
            });
        default:
            return state
    }
}