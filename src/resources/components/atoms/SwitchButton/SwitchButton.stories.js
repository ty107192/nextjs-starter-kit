import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs/react';
import PropTypes from 'prop-types';
import SwitchButton from './SwitchButton';


class TestWrapper extends React.Component {
    static propTypes = {
        text1: PropTypes.string,
        text2: PropTypes.string
    };

    static defaultProps = {
        text1: '',
        text2: ''
    };
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
        const {text1, text2} = this.props;
        return (
            <div>
                <SwitchButton
                    onClick={() => this.mockClickHandle(1)}
                    isActive={this.state.activeIndex === 1}
                >{text1}
                </SwitchButton>
                <SwitchButton
                    onClick={() => this.mockClickHandle(2)}
                    isActive={this.state.activeIndex === 2}
                >{text2}
                </SwitchButton>
            </div>
        );
    }
}


storiesOf('SwitchButton', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <TestWrapper text1={text('button1', 'PS4')} text2={text('button2', 'Nintendo Switch')}/>
    ));
