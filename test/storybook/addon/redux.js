import * as React from 'react';
import {Provider} from 'react-redux';
import {initRedux} from '../../../storage/stores/redux';

const withReduxProvider = () => storyFn => (
    <Provider store={initRedux()}>
        {storyFn()}
    </Provider>
);

export default withReduxProvider;
