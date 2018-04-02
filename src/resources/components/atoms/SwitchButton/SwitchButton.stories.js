import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SwitchButton from './SwitchButton';


class TestWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    mockClickHandle = (index) => {
        // console
        action('onClick')(index);

        // action
        this.setState({activeIndex: index});
    }

    render() {
        return (
            <div>
                <SwitchButton
                    onClick={() => this.mockClickHandle(1)}
                    isActive={this.state.activeIndex === 1}
                >PS4 Pro
                </SwitchButton>
                <SwitchButton
                    onClick={() => this.mockClickHandle(2)}
                    isActive={this.state.activeIndex === 2}
                >Nintendo Switch
                </SwitchButton>
            </div>
        );
    }
}


storiesOf('SwitchButton', module)
    .add('default', () => (
        <TestWrapper/>
    ));
