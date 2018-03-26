import { createStore, applyMiddleware,compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '@stores/reducers';

export const initStore = (initialState) => {
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}