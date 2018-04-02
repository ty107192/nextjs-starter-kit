import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import AddLife from './AddLife';


class TestWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameLife: 1
        };
    }

    mockAddLife = () => {
        // console
        action('addLife')(this.state.gameLife);

        // action
        this.setState({gameLife: this.state.gameLife + 1});
    };

    mockSubLife = () => {
        // console
        action('subLife')(this.state.gameLife);

        // action
        this.setState({gameLife: this.state.gameLife - 1});
    };

    render() {
        return (
            <AddLife gameLife={this.state.gameLife} addLife={this.mockAddLife} subLife={this.mockSubLife}/>
        );
    }
}


storiesOf('AddLife', module)
    .add('default', () => <TestWrapper/>);
