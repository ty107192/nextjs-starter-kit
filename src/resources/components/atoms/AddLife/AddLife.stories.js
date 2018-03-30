import React from 'react';
import {State, Store} from '@sambego/storybook-state';
import {storiesOf} from '@storybook/react';
import AddLife from './AddLife';
// import {addLife, subLife} from '../../../../storage/stores/actions/game';

const store = new Store({
    gameLife: 1
});

const addLife = () => {
    store.set({gameLife: store.get('gameLife') + 1});
};

const subLife = () => {
    store.set({gameLife: store.get('gameLife') - 1});
};


storiesOf('AddLife', module)
    .add('default', () => (
        <div className="container">
            <State store={store}>
                <AddLife gameLife={store.gameLife} addLife={addLife} subLife={subLife}/>
            </State>
        </div>
    ));
