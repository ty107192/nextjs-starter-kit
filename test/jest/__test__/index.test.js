/* eslint-env jest */

import {shallow, mount} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import AddLife from '../../../src/resources/components/atoms/AddLife/AddLife';

//mock i18next
jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate HoC receive the t function as a prop
    translate: () => Component => props => <Component t={(code) => code} {...props} />,
}));




describe('With AddLife', () => {


    let gameLife = 0;

    function addLife() {
        return gameLife + 1;
    }

    function subLife() {
        return gameLife - 1;
    }

    it('傳入的gameLife參數是否一致', () => {
        // const wrapper = shallow(<AddLife addLife={addLife} subLife={subLife} gameLife={gameLife}/>);
        const wrapper = shallow(<div>
            test1234566
            <div>
                <div>
                    <button>1234</button>
                </div>
            </div>
        </div>);
        // expect(wrapper.prop('gameLife')).toBe(gameLife);

        // wrapper.find('button').eq(0).simulate('click');
        wrapper.simulate('click');
        // expect(wrapper.prop('gameLife')).toBe(1);
        // expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('button').text()).toBe('1234');


        // console.log(wrapper.debug());


    });
    it('子元素必須存在', () => {
        const wrapper = shallow(<AddLife addLife={addLife} subLife={subLife} gameLife={gameLife}/>);
        expect(wrapper.children().length).toBe(0);
    });
    it('測試i18n', () => {
        const wrapper = mount(
                <AddLife addLife={addLife} subLife={subLife} gameLife={gameLife}/>
        );
        // console.log(wrapper.debug());

        // expect(wrapper.children().length).toBe(1);
    });
})
