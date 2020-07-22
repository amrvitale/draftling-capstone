import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CritiqueFreeform from './CritiqueFreeform';

describe (`CritiqueFreeform component`, () => {
    it('renders a .CritiqueFreeform by default', () => {
        const wrapper = shallow(<CritiqueFreeform />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    
})