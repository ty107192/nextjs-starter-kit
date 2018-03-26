import {createStore, applyMiddleware, compose} from 'redux';
import withRedux from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '@stores/reducers';

export const initStore = initialState => createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default page => withRedux(initStore)(page);
